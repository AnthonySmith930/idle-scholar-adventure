import { useEffect, useState } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { db, expoDb } from '@/db/client'
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator'
import migrations from '~/drizzle/migrations'
import { ThemeProvider } from '@/theme/themeProvider'
import { useTheme } from '@/stores/themeStore'
import {
  useFonts,
  PressStart2P_400Regular
} from '@expo-google-fonts/press-start-2p'
import { useAccountStore } from '@/stores/accountStore'
import { useHeroStore } from '@/stores/heroStore'

// Force the native splash screen to stay frozen over the UI layer on boot
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  // Separating system wide laods from core application readiness
  const [fontsLoaded, fontError] = useFonts({
    PressStart2P_400Regular: PressStart2P_400Regular
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <ThemeProvider>
      <Application fontsReady={fontsLoaded || !!fontError} />
    </ThemeProvider>
  )
}

function Application({ fontsReady }: { fontsReady: boolean }) {
  if (__DEV__) {
    const { useDrizzleStudio } = require('expo-drizzle-studio-plugin')
    useDrizzleStudio(expoDb)
  }

  const { success: migrationsSuccess, error: migrationsError } = useMigrations(
    db,
    migrations
  )
  const [storesHydrated, setStoresHydrated] = useState(false)

  const isAccountHydrated = useAccountStore((state) => state.isHydrated)
  const hydrateAccount = useAccountStore((state) => state.hydrateAccount)
  const isHeroesHydrated = useHeroStore((state) => state.isHydrated)
  const hydrateHeroes = useHeroStore((state) => state.hydrateHeroes)

  useEffect(() => {
    if (migrationsError) {
      console.error('Database migration failed on startup:', migrationsError)
    }
  }, [migrationsError])

  useEffect(() => {
    async function performStoreHydration() {
      if (!migrationsSuccess) return
      try {
        await Promise.all([hydrateAccount(), hydrateHeroes()])
        setStoresHydrated(true)
      } catch (e) {
        console.error(
          'Failed to cleanly hydrate local store arrays from SQLite schema:',
          e
        )
      }
    }
    performStoreHydration()
  }, [migrationsSuccess])

  const appIsReady =
    fontsReady &&
    migrationsSuccess &&
    storesHydrated &&
    isAccountHydrated &&
    isHeroesHydrated

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync()
    }
  }, [appIsReady])

  // Fallback view for edge case failures.
  if (!appIsReady) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#121214'
        }}
      >
        <ActivityIndicator size="large" color="#A855F7" />
      </View>
    )
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ title: 'Idle Scholar Adventures' }}
      />
      <Stack.Screen
        name="create-hero"
        options={{ presentation: 'modal', title: 'New Hero' }}
      />
      <Stack.Screen name="hero/[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="active-quest"
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack>
  )
}
