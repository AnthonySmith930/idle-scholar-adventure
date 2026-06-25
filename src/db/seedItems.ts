import { ExpoSQLiteDatabase } from 'drizzle-orm/expo-sqlite'
import { count } from 'drizzle-orm'
import { itemTable } from './schema'
import {
  WEAPON_MASTER_DATA,
  ARMOR_MASTER_DATA,
  CONSUMABLE_MASTER_DATA,
  ACCESSORY_MASTER_DATA
} from './seedData'

/**
 * Validates and seeds your master items dataset on initial database initialization.
 */
export async function seedItemsTable(db: ExpoSQLiteDatabase<any>) {
  const MASTER_ITEM_LIST = [
    ...WEAPON_MASTER_DATA,
    ...ARMOR_MASTER_DATA,
    ...CONSUMABLE_MASTER_DATA,
    ...ACCESSORY_MASTER_DATA
  ]
  
  try {
    console.log('📦 Checking master item records configuration...')

    // Check if the user's database file already contains items
    const checkResult = await db.select({ total: count() }).from(itemTable)
    const tableIsPopulated = checkResult[0]?.total > 0

    if (tableIsPopulated) {
      console.log(
        '✅ Master items table already populated. Skipping seeding lifecycle.'
      )
      return
    }

    if (MASTER_ITEM_LIST.length === 0) {
      console.warn(
        '⚠️ Seeding skipped: ITEM_SEED_DATA array is currently empty.'
      )
      return
    }

    console.log(
      `🌱 Writing ${MASTER_ITEM_LIST.length} item blueprints down into SQLite...`
    )

    // Write all blueprint rows safely using an atomic database transaction
    await db.transaction(async (tx) => {
      await tx.insert(itemTable).values(MASTER_ITEM_LIST)
    })

    console.log(
      '🎉 Master items successfully synchronized with local device storage!'
    )
  } catch (error) {
    console.error('❌ Database error during item seeding lifecycle:', error)
  }
}
