import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Appearance } from 'react-native'
import * as SystemUI from 'expo-system-ui'
import { Theme, ThemeMode } from '@/types/theme'
import { themes } from '@/theme/themes'

interface ThemeState {
  themeMode: ThemeMode
  systemColorScheme: 'light' | 'dark' | 'unspecified' | null
  theme: Theme

  // Actions
  setThemeMode: (mode: ThemeMode) => void
  setSystemColorScheme: (scheme: 'light' | 'dark' | 'unspecified' | null) => void
  initializeTheme: () => void
}

const initialSystemScheme = Appearance.getColorScheme()

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      themeMode: 'auto',
      systemColorScheme: initialSystemScheme === undefined ? null : initialSystemScheme,
      theme: themes.light,

      setThemeMode: (mode) => {
        const systemScheme = get().systemColorScheme
        const newTheme = getThemeForMode(mode, systemScheme)

        // Update system UI
        SystemUI.setBackgroundColorAsync(newTheme.colors.background)

        set({
          themeMode: mode,
          theme: newTheme
        })
      },

      setSystemColorScheme: (scheme) => {
        const normalizedScheme = scheme || null
        const mode = get().themeMode
        const newTheme = getThemeForMode(mode, normalizedScheme)

        set({
          systemColorScheme: normalizedScheme,
          theme: newTheme
        })
      },

      initializeTheme: () => {
        const { themeMode, systemColorScheme } = get()
        const theme = getThemeForMode(themeMode, systemColorScheme)

        SystemUI.setBackgroundColorAsync(theme.colors.background)
        set({ theme })
      }
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ themeMode: state.themeMode }),
      onRehydrateStorage: () => (state) => {
        const mode = state?.themeMode ?? 'auto'
        const scheme =
          state?.systemColorScheme ?? Appearance.getColorScheme() ?? null
        const theme = getThemeForMode(mode, scheme)

        SystemUI.setBackgroundColorAsync(theme.colors.background)

        useThemeStore.setState({ theme })
      }
    }
  )
)

export const useHasHydrated = () => {
  return useThemeStore.persist?.hasHydrated() ?? false
}

// Helper function
function getThemeForMode(
  mode: ThemeMode,
  systemScheme: 'light' | 'dark' | 'unspecified' | null
): Theme {
  if (mode === 'auto') {
    return systemScheme === 'dark' ? themes.dark : themes.light
  }
  return mode === 'dark' ? themes.dark : themes.light
}

// Selector hooks for better performance
export const useTheme = () => useThemeStore((state) => state.theme)
export const useThemeMode = () => useThemeStore((state) => state.themeMode)
export const useSetThemeMode = () =>
  useThemeStore((state) => state.setThemeMode)
export const hasHydrated = () => useThemeStore.persist?.hasHydrated() ?? false
export const onHydrate = (cb: () => void) =>
  useThemeStore.persist?.onFinishHydration(cb)
