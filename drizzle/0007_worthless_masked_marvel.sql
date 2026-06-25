ALTER TABLE `items_master` RENAME COLUMN "type" TO "item_type";--> statement-breakpoint
ALTER TABLE `items_master` ADD `item_class` text NOT NULL;