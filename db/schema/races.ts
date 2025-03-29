import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const races = pgTable("races", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  name: text("name"),
  creatureType: text("creature_type"),
  size: text("size"),
  speed: text("speed"),
});

export type InsertRace = typeof races.$inferInsert;
export type SelectRace = typeof races.$inferSelect;
