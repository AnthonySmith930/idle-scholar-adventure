import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'
import { itemTable } from './items'

export const heroClasses = ['warrior', 'mage', 'ranger', 'rogue'] as const
export type HeroClass = (typeof heroClasses)[number]

export const heroesTable = sqliteTable('heroes', {
  id: int().primaryKey({ autoIncrement: true }),
  createdAt: int({ mode: 'number' })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
  name: text().notNull(),
  class: text('class', { enum: heroClasses }).notNull(),
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
  luck: int().default(1).notNull()
})
