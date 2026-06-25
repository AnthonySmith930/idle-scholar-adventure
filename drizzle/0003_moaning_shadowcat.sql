PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_heroes` (
	`id` text PRIMARY KEY NOT NULL,
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
INSERT INTO `__new_heroes`("id", "createdAt", "name", "class", "level", "current_exp", "gold", "total_time_adventuring", "equipped_weapon_id", "equipped_weapon_level", "equipped_armor_id", "equipped_armor_level", "equipped_accessory_id", "equipped_accessory_level", "power", "fortitude", "vigor", "luck") SELECT "id", "createdAt", "name", "class", "level", "current_exp", "gold", "total_time_adventuring", "equipped_weapon_id", "equipped_weapon_level", "equipped_armor_id", "equipped_armor_level", "equipped_accessory_id", "equipped_accessory_level", "power", "fortitude", "vigor", "luck" FROM `heroes`;--> statement-breakpoint
DROP TABLE `heroes`;--> statement-breakpoint
ALTER TABLE `__new_heroes` RENAME TO `heroes`;--> statement-breakpoint
PRAGMA foreign_keys=ON;