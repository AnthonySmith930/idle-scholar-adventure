import { openDatabaseSync } from 'expo-sqlite'
import { drizzle } from 'drizzle-orm/expo-sqlite'

export const expoDb = openDatabaseSync('idle_scholar.db')
export const db = drizzle(expoDb)
