CREATE TABLE `heroes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`createdAt` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`name` text NOT NULL,
	`class` text NOT NULL,
	`level` integer DEFAULT 1 NOT NULL,
	`current_exp` integer DEFAULT 0 NOT NULL,
	`gold` integer DEFAULT 0 NOT NULL,
	`total_time_adventuring` integer DEFAULT 0 NOT NULL,
	`equipped_weapon_id` integer,
	`equipped_weapon_level` integer DEFAULT 1,
	`equipped_armor_id` integer,
	`equipped_armor_level` integer DEFAULT 1,
	`equipped_accessory_id` integer,
	`equipped_accessory_level` integer DEFAULT 1,
	`power` integer DEFAULT 1 NOT NULL,
	`fortitude` integer DEFAULT 1 NOT NULL,
	`vigor` integer DEFAULT 1 NOT NULL,
	`luck` integer DEFAULT 1 NOT NULL,
	FOREIGN KEY (`equipped_weapon_id`) REFERENCES `items_master`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`equipped_armor_id`) REFERENCES `items_master`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`equipped_accessory_id`) REFERENCES `items_master`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `items_master` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`type` text NOT NULL,
	`rarity` text NOT NULL,
	`icon_name` text NOT NULL,
	`base_value` integer DEFAULT 0 NOT NULL,
	`stats` text NOT NULL
);
