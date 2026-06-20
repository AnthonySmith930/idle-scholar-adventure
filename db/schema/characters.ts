import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { itemTable } from './items'

export const characterTable = sqliteTable('characters', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  level: int().default(1),
  current_exp: int().default(0),
  gold: int().default(0),
  total_time_adventuring: int().default(0),
  equipped_weapon_id: int().references(() => itemTable.id),
  equipped_weapon_level: int().default(1),
  equipped_armor_id: int().references(() => itemTable.id),
  equipped_armor_level: int().default(1),
  equipped_accessory_id: int().references(() => itemTable.id),
  equipped_accessory_level: int().default(1),
})
