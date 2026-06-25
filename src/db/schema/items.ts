import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const itemTable = sqliteTable('items_master', {
  id: text().primaryKey(),
  name: text().notNull(),
  description: text().notNull(),
  type: text().$type<'weapon' | 'armor' | 'consumable' | 'accessory'>().notNull(),
  rarity: text().$type<'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'>().notNull(),
  sprite: text().notNull(),
  base_value: int().default(0).notNull(),
  stats: text({ mode: 'json'}).notNull(),
  isDroppable: int('is_droppable', { mode: 'boolean' }).notNull().default(true)
})
