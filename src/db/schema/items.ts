import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const itemTable = sqliteTable('items_master', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text().notNull(),
  type: text().$type<'weapon' | 'armor' | 'consumable' | 'accessory'>().notNull(),
  rarity: text().$type<'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'>().notNull(),
  icon_name: text().notNull(), // asset file name
  base_value: int().default(0).notNull(),
  stats: text({ mode: 'json'}).notNull()

})
