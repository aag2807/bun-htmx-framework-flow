CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`role` text,
	`creation_date` integer,
	`last_update` integer,
	`email` text,
	`password` text
);
