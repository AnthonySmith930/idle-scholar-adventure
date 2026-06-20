PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_characters` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
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
INSERT INTO `__new_characters`("id", "name", "class", "level", "current_exp", "gold", "total_time_adventuring", "equipped_weapon_id", "equipped_weapon_level", "equipped_armor_id", "equipped_armor_level", "equipped_accessory_id", "equipped_accessory_level", "power", "fortitude", "vigor", "luck") SELECT "id", "name", "class", "level", "current_exp", "gold", "total_time_adventuring", "equipped_weapon_id", "equipped_weapon_level", "equipped_armor_id", "equipped_armor_level", "equipped_accessory_id", "equipped_accessory_level", "power", "fortitude", "vigor", "luck" FROM `characters`;--> statement-breakpoint
DROP TABLE `characters`;--> statement-breakpoint
ALTER TABLE `__new_characters` RENAME TO `characters`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_items_master` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`type` text NOT NULL,
	`rarity` text NOT NULL,
	`icon_name` text NOT NULL,
	`base_value` integer DEFAULT 0 NOT NULL,
	`stats` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_items_master`("id", "name", "description", "type", "rarity", "icon_name", "base_value", "stats") SELECT "id", "name", "description", "type", "rarity", "icon_name", "base_value", "stats" FROM `items_master`;--> statement-breakpoint
DROP TABLE `items_master`;--> statement-breakpoint
ALTER TABLE `__new_items_master` RENAME TO `items_master`;