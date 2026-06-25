CREATE TABLE `account_metadata` (
	`id` text PRIMARY KEY DEFAULT 'global_account' NOT NULL,
	`total_play_time_seconds` integer DEFAULT 0 NOT NULL,
	`is_first_launch` integer DEFAULT true NOT NULL,
	`settings` text DEFAULT '{"sfx":true,"music":true}' NOT NULL
);
