import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const accountMetadataTable = sqliteTable('account_metadata', {
  // Hardcoded to 'global_account' to guarantee we only ever read/write a single row
  id: text().primaryKey().default('global_account'),
  totalPlayTimeSeconds: integer('total_play_time_seconds').notNull().default(0),
  totalGoldEarned: integer('total_gold_earned').notNull().default(0),
  isFirstLaunch: integer('is_first_launch', { mode: 'boolean' })
    .notNull()
    .default(true),

  // settings - configuration flags like sound, notifications, or layout scales
  settings: text({ mode: 'json' })
    .notNull()
    .default('{"sfx":true,"music":true}')
})
