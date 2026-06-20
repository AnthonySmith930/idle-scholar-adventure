import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { itemTable } from './items'

export const characterClasses = ['warrior', 'mage', 'ranger', 'rogue'] as const;
export type CharacterClass = typeof characterClasses[number];

export const characterTable = sqliteTable('characters', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  class: text('class', { enum: characterClasses }).notNull(),
  level: int().default(1).notNull(),
  current_exp: int().default(0).notNull(),
  gold: int().default(0).notNull(),
  total_time_adventuring: int().default(0).notNull(),

  // gear
  equipped_weapon_id: int().references(() => itemTable.id),
  equipped_weapon_level: int().default(1),
  equipped_armor_id: int().references(() => itemTable.id),
  equipped_armor_level: int().default(1),
  equipped_accessory_id: int().references(() => itemTable.id),
  equipped_accessory_level: int().default(1),

  // base stats
  power: int().default(1).notNull(),
  fortitude: int().default(1).notNull(),
  vigor: int().default(1).notNull(), 
  luck: int().default(1).notNull(),
})
