import { create } from 'zustand'
import { db } from '@/db/client'
import { eq } from 'drizzle-orm'
import { accountMetadataTable } from '@/db/schema'

// Explicit type shape for our settings object
interface AccountSettings {
  sfx: boolean
  music: boolean
}

interface AccountState {
  // state
  totalPlayTimeSeconds: number
  totalGoldEarned: number
  isFirstLaunch: boolean
  settings: AccountSettings
  isHydrated: boolean

  // Actions
  hydrateAccount: () => Promise<void>
  updateSetting: (key: keyof AccountSettings, value: boolean) => Promise<void>
  completeFirstLaunch: () => Promise<void>
  trackGoldEarned: (amount: number) => Promise<void>
}

// The unique static anchor ID pointing to our single configuration row
const GLOBAL_ACCOUNT_ID = 'global_account'

export const useAccountStore = create<AccountState>((set, get) => ({
  // Default values until database hydration completes
  totalPlayTimeSeconds: 0,
  totalGoldEarned: 0,
  isFirstLaunch: true,
  settings: { sfx: true, music: true },
  isHydrated: false,

  hydrateAccount: async () => {
    try {
      // Query the single master metadata row
      const rows = await db
        .select()
        .from(accountMetadataTable)
        .where(eq(accountMetadataTable.id, GLOBAL_ACCOUNT_ID))
        .execute()

      if (rows.length > 0) {
        // Row exists! Hydrate the state variables cleanly
        const record = rows[0]
        set({
          totalPlayTimeSeconds: record.totalPlayTimeSeconds,
          isFirstLaunch: record.isFirstLaunch,
          settings: record.settings as AccountSettings,
          isHydrated: true
        })
      } else {
        // App opened for the very first time. Insert default baseline record.
        const defaultSettings: AccountSettings = { sfx: true, music: true }

        await db
          .insert(accountMetadataTable)
          .values({
            id: GLOBAL_ACCOUNT_ID,
            totalPlayTimeSeconds: 0,
            isFirstLaunch: true,
            settings: defaultSettings
          })
          .execute()

        set({ isHydrated: true })
      }
    } catch (error) {
      console.error(
        'Failed to hydrate account_metadata store from SQLite:',
        error
      )
    }
  },

  updateSetting: async (key, value) => {
    // Grab copy of previous settings, mutate memory branch instantly for snappy UI response
    const currentSettings = get().settings
    const updatedSettings = { ...currentSettings, [key]: value }

    set({ settings: updatedSettings })

    // Write-Through: Background flush to SQLite disk asynchronously
    try {
      await db
        .update(accountMetadataTable)
        .set({ settings: updatedSettings })
        .where(eq(accountMetadataTable.id, GLOBAL_ACCOUNT_ID))
        .execute()
    } catch (error) {
      console.error(
        `Database failed to persist settings update for ${key}:`,
        error
      )
    }
  },

  completeFirstLaunch: async () => {
    // Instantly skip onboarding screens in memory
    set({ isFirstLaunch: false })

    // Non-blocking flush update directly to disk
    try {
      await db
        .update(accountMetadataTable)
        .set({ isFirstLaunch: false })
        .where(eq(accountMetadataTable.id, GLOBAL_ACCOUNT_ID))
        .execute()
    } catch (error) {
      console.error(
        'Database failed to persist first launch completion status:',
        error
      )
    }
  },

  trackGoldEarned: async (amount) => {
    if (amount <= 0) return

    const newTotal = get().totalGoldEarned + amount

    set({ totalGoldEarned: newTotal })

    try {
      await db
        .update(accountMetadataTable)
        .set({ totalGoldEarned: newTotal })
        .where(eq(accountMetadataTable.id, GLOBAL_ACCOUNT_ID))
        .execute()
    } catch (error) {
      console.error('Failed to update lifetime gold metrics:', error)
    }
  }
}))

// Selectors/hooks
export const useIsAccountLoading = () =>
  useAccountStore((state) => !state.isHydrated)
