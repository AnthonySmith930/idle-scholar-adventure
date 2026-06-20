import { useEffect, useState } from 'react'
import { Appearance, AppState, AppStateStatus } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useThemeStore, hasHydrated, onHydrate } from '../stores/themeStore'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(hasHydrated())
  const theme = useThemeStore((state) => state.theme)
  const initializeTheme = useThemeStore((state) => state.initializeTheme)

  // initialize theme state, if not restored from persistance
  useEffect(() => {
    if (!hydrated) {
      onHydrate?.(() => setHydrated(true))
      return
    }

    initializeTheme()
  }, [hydrated, initializeTheme])

  // detect app state and system theme mode for correct light/dark setting
  useEffect(() => {
    if (!hydrated) return

    const applyCurrentScheme = () => {
      const mode = useThemeStore.getState().themeMode
      if (mode !== 'auto') return

      const current = Appearance.getColorScheme() ?? null

      useThemeStore.getState().setSystemColorScheme(current)
    }

    const appearanceSub = Appearance.addChangeListener(() => {
      applyCurrentScheme()
    })

    const appSub = AppState.addEventListener('change', (state: AppStateStatus) => {
      if (state === 'active') applyCurrentScheme()
    })

    applyCurrentScheme()

    return () => {
      appearanceSub.remove()
      appSub.remove()
    }
  }, [hydrated])

  return (
    <>
      <StatusBar style={theme.dark ? 'light' : 'dark'} />
      {children}
    </>
  )
}
