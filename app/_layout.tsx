import { useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { openDatabaseSync } from 'expo-sqlite'
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator'
import migrations from '../drizzle/migrations'

const expoDb = openDatabaseSync('idle_scholar.db')
const db = drizzle(expoDb)

export default function RootLayout() {
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
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: '#fffff' }
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
