import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { openDatabaseSync } from 'expo-sqlite'
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator'
import migrations from './drizzle/migrations'

const expoDb = openDatabaseSync('idle_scholar.db')
const db = drizzle(expoDb)

export default function App() {
  // Setup database
  if (__DEV__) {
    const { useDrizzleStudio } = require('expo-drizzle-studio-plugin')
    useDrizzleStudio(expoDb);
  }
  const { success, error } = useMigrations(db, migrations)

  if (error) {
    return <Text>Migration error: {error.message}</Text>
  }

  if (!success) {
    return <Text>Setting up database...</Text>
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
