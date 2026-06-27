ALTER TABLE `heroes` ADD `unassigned_stat_points` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `heroes` ADD `active_quest_id` text;--> statement-breakpoint
ALTER TABLE `heroes` ADD `previous_quest_id` text;