import { create } from 'zustand'
import { db } from '@/db/client'
import { eq } from 'drizzle-orm'
import { heroesTable } from '@/db/schema'
import { useAccountStore } from './accountStore'
import * as Crypto from 'expo-crypto'
import { Hero, HeroClass } from '@/types/game'
import { generateStartingKit } from '@/utils/generateStartingKit'
import { generateStartingStats } from '@/utils/generateStartingStats'

interface HeroState {
  heroes: Hero[]
  isHydrated: boolean

  hydrateHeroes: () => Promise<void>
  recruitHero: (
    name: string,
    heroClass: HeroClass,
    sprite: string
  ) => Promise<void>
  addGoldToHero: (heroId: string, amount: number) => Promise<void>
}

export const useHeroStore = create<HeroState>((set, get) => ({
  heroes: [],
  isHydrated: false,

  hydrateHeroes: async () => {
    try {
      const allHeroes = await db.select().from(heroesTable).execute()
      set({ heroes: allHeroes, isHydrated: true })
    } catch (error) {
      console.error('Failed to hydrate heroes from SQLite:', error)
    }
  },

  recruitHero: async (name, heroClass, sprite) => {
    const newHeroId = Crypto.randomUUID()

    const newHero: Hero = {
      id: newHeroId,
      name,
      level: 1,
      class: heroClass,
      sprite,
      createdAt: Date.now(),
      equipment: generateStartingKit(heroClass),
      current_exp: 0,
      total_time_adventuring: 0,
      gold: 0,
      ...generateStartingStats(heroClass)
    }

    // 1. Optimistic memory update: Render smoothly on the UI instantly
    set((state) => ({ heroes: [...state.heroes, newHero] }))

    // 2. Write-Through: Safely push string UUIDs and JSON payload to SQLite
    try {
      await db.insert(heroesTable).values(newHero).execute()
    } catch (error) {
      console.error('Failed to save recruited hero to SQLite:', error)
      // Rollback memory if database write crashes
      set((state) => ({
        heroes: state.heroes.filter((h) => h.id !== newHeroId)
      }))
    }
  },

  addGoldToHero: async (heroId, amount) => {
    if (amount <= 0) return

    let updatedGoldAmount = 0

    // 1. Optimistic Update: Increment scholar's personal wallet
    set((state) => {
      const updatedHeroes = state.heroes.map((hero) => {
        if (hero.id === heroId) {
          updatedGoldAmount = hero.gold + amount
          return { ...hero, gold: updatedGoldAmount }
        }
        return hero
      })
      return { heroes: updatedHeroes }
    })

    // 2. Cross-Store Update: Log macro account accumulation
    useAccountStore.getState().trackGoldEarned(amount)

    // 3. Write-Through: Commit directly back to the database
    try {
      await db
        .update(heroesTable)
        .set({ gold: updatedGoldAmount })
        .where(eq(heroesTable.id, heroId))
        .execute()
    } catch (error) {
      console.error(`Failed to save gold update for hero ${heroId}:`, error)
    }
  }
}))

// Selectors/hooks
export const useHeroes = () => useHeroStore((state) => state.heroes)
export const useRecruitHero = () => useHeroStore((state) => state.recruitHero)
export const useTotalQuestTime = () => {
  return useHeroStore((state) =>
    state.heroes.reduce((sum, hero) => sum + hero.total_time_adventuring, 0)
  )
}
export const useIsAccountLoading = () =>
  useHeroStore((state) => !state.isHydrated)
