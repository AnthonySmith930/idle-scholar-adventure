PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_heroes` (
	`id` text PRIMARY KEY NOT NULL,
	`createdAt` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`name` text NOT NULL,
	`sprite` text NOT NULL,
	`class` text NOT NULL,
	`level` integer DEFAULT 1 NOT NULL,
	`current_exp` integer DEFAULT 0 NOT NULL,
	`gold` integer DEFAULT 0 NOT NULL,
	`total_time_adventuring` integer DEFAULT 0 NOT NULL,
	`equipment` text DEFAULT '{}' NOT NULL,
	`power` integer DEFAULT 1 NOT NULL,
	`fortitude` integer DEFAULT 1 NOT NULL,
	`vigor` integer DEFAULT 1 NOT NULL,
	`luck` integer DEFAULT 1 NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_heroes`("id", "createdAt", "name", "sprite", "class", "level", "current_exp", "gold", "total_time_adventuring", "equipment", "power", "fortitude", "vigor", "luck") SELECT "id", "createdAt", "name", "sprite", "class", "level", "current_exp", "gold", "total_time_adventuring", "equipment", "power", "fortitude", "vigor", "luck" FROM `heroes`;--> statement-breakpoint
DROP TABLE `heroes`;--> statement-breakpoint
ALTER TABLE `__new_heroes` RENAME TO `heroes`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_items_master` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`type` text NOT NULL,
	`rarity` text NOT NULL,
	`icon_name` text NOT NULL,
	`base_value` integer DEFAULT 0 NOT NULL,
	`stats` text NOT NULL,
	`is_droppable` integer DEFAULT true NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_items_master`("id", "name", "description", "type", "rarity", "icon_name", "base_value", "stats", "is_droppable") SELECT "id", "name", "description", "type", "rarity", "icon_name", "base_value", "stats", "is_droppable" FROM `items_master`;--> statement-breakpoint
DROP TABLE `items_master`;--> statement-breakpoint
ALTER TABLE `__new_items_master` RENAME TO `items_master`;