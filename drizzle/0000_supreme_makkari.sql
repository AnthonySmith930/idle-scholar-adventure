CREATE TABLE `characters` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`level` integer DEFAULT 1,
	`current_exp` integer DEFAULT 0,
	`gold` integer DEFAULT 0,
	`total_time_adventuring` integer DEFAULT 0,
	`equipped_weapon_id` integer,
	`equipped_weapon_level` integer DEFAULT 1,
	`equipped_armor_id` integer,
	`equipped_armor_level` integer DEFAULT 1,
	`equipped_accessory_id` integer,
	`equipped_accessory_level` integer DEFAULT 1,
	FOREIGN KEY (`equipped_weapon_id`) REFERENCES `items_master`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`equipped_armor_id`) REFERENCES `items_master`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`equipped_accessory_id`) REFERENCES `items_master`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `items_master` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`type` text,
	`rarity` text,
	`icon_name` text NOT NULL,
	`base_value` integer DEFAULT 0,
	`stats` text
);
