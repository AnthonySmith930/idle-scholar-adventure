import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'
import { HeroClass, HeroEquipment } from '@/types/game'

export const heroesTable = sqliteTable('heroes', {
  id: text().primaryKey(),
  createdAt: int({ mode: 'number' })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
  name: text().notNull(),
  sprite: text().notNull(),
  class: text('class').$type<HeroClass>().notNull(),
  level: int().default(1).notNull(),
  unassignedStatPoints: int('unassigned_stat_points').default(0).notNull(),
  current_exp: int().default(0).notNull(),
  gold: int().default(0).notNull(),
  total_time_adventuring: int().default(0).notNull(),
  activeQuestId: text('active_quest_id'),
  previousQuestId: text('previous_quest_id'),

  // gear
  equipment: text({ mode: 'json' })
    .$type<HeroEquipment>()
    .notNull()
    .default(sql`'{}'`),

  // base stats
  power: int().default(1).notNull(),
  fortitude: int().default(1).notNull(),
  vigor: int().default(1).notNull(),
  luck: int().default(1).notNull()
})
