import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { ItemStatsJson, ItemType, ItemRarity, ItemClass } from '@/types/game'

export const itemTable = sqliteTable('items_master', {
  id: text().primaryKey(),
  name: text().notNull(),
  description: text().notNull(),
  rarity: text().$type<ItemRarity>().notNull(),
  type: text('item_type').$type<ItemType>().notNull(),
  itemClass: text('item_class').$type<ItemClass>().notNull(),
  sprite: text().notNull(),
  baseValue: int('base_value').default(0).notNull(),
  stats: text({ mode: 'json' }).$type<ItemStatsJson>().notNull(),
  isDroppable: int('is_droppable', { mode: 'boolean' }).notNull().default(true)
})
