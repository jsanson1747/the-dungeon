import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const classes = pgTable("classes", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  name: text("name"),
});

export type InsertClass = typeof classes.$inferInsert;
export type SelectClass = typeof classes.$inferSelect;
