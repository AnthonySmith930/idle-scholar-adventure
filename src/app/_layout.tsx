import { useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { openDatabaseSync } from 'expo-sqlite'
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator'
import migrations from '~/drizzle/migrations'
import { ThemeProvider } from '@/theme/themeProvider'
import { useTheme } from '@/stores/themeStore'
import {
  useFonts,
  PressStart2P_400Regular
} from '@expo-google-fonts/press-start-2p'

SplashScreen.preventAutoHideAsync()

const expoDb = openDatabaseSync('idle_scholar.db')
const db = drizzle(expoDb)

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    PressStart2P_400Regular: PressStart2P_400Regular
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <ThemeProvider>
      <Application />
    </ThemeProvider>
  )
}

function Application() {
  const theme = useTheme()
  // Setup database
  if (__DEV__) {
    const { useDrizzleStudio } = require('expo-drizzle-studio-plugin')
    useDrizzleStudio(expoDb)
  }

  const { success, error } = useMigrations(db, migrations)

  useEffect(() => {
    if (error) {
      console.error('Database migration failed on startup:', error)
    }
  }, [error])

  if (!success) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#A855F7" />
      </View>
    )
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#121214' },
        headerTitleStyle: { fontSize: 12, fontFamily: 'PressStart2P_400Regular', color: '#fff' },
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: theme.colors.background }
      }}
    >
      {/* Home Screen (Character List) */}
      <Stack.Screen
        name="index"
        options={{ title: 'Idle Scholar Adventures' }}
      />

      {/* Creation Modal */}
      <Stack.Screen
        name="create-character"
        options={{ presentation: 'modal', title: 'New Hero' }}
      />

      {/* Character Profile (We hide header because we'll build a custom one) */}
      <Stack.Screen name="character/[id]" options={{ headerShown: false }} />

      {/* The Lockout Active Quest Screen */}
      <Stack.Screen
        name="active-quest"
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121214'
  }
})
