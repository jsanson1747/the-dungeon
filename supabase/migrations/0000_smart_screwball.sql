CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"sodium_chloride" text,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
