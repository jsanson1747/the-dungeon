import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { characters, classes, races, users } from "./schema";

config({ path: ".env.local" });
const client = postgres(process.env.DATABASE_URL!);
export const dbSchema = { characters, classes, races, users };
export const db = drizzle({
  schema: dbSchema,
  client,
});
