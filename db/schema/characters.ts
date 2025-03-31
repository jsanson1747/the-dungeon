import { relations } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { races } from "./races";
import { classes } from "./classes";
import { users } from "./users";

export const alignmentsEnum = pgEnum("alignments", [
  "lawful good",
  "neutral good",
  "chaotic good",
  "lawful neutral",
  "true neutral",
  "chaotic neutral",
  "lawful evil",
  "neutral evil",
  "chaotic evil",
]);

export const characters = pgTable("characters", {
  id: serial("id").primaryKey().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  name: text("name").notNull(),
  raceId: integer("race")
    .references(() => races.id)
    .notNull(),
  classId: integer("class")
    .references(() => classes.id)
    .notNull(),
  alignment: alignmentsEnum().notNull(),
  level: integer("level").notNull(),
  experiencePoints: integer("experience_points").notNull(),
});

export const charactersRelations = relations(characters, ({ one }) => ({
  userId: one(users),
  raceId: one(races),
  classId: one(classes),
}));

export type InsertCharacter = typeof characters.$inferInsert;
export type SelectCharacter = typeof characters.$inferSelect;
