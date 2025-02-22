import postgres from "postgres";
import { db } from "./index";
import { InsertUser, SelectUser, usersTable } from "./schema";
import { eq } from "drizzle-orm";

type QueryReturnType<T> =
  | { data: T[]; error: undefined }
  | { data: undefined; error: postgres.PostgresError };

export async function createUser(
  data: InsertUser
): Promise<QueryReturnType<InsertUser>> {
  try {
    return {
      data: await db.insert(usersTable).values(data).returning(),
      error: undefined,
    };
  } catch (error) {
    if (error instanceof postgres.PostgresError) {
      return { data: undefined, error: error };
    }
    return {
      data: undefined,
      error: new postgres.PostgresError("An unknown error occured"),
    };
  }
}

export async function getUser(
  username: string
): Promise<QueryReturnType<SelectUser>> {
  try {
    return {
      data: await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.username, username)),
      error: undefined,
    };
  } catch (error) {
    if (error instanceof postgres.PostgresError) {
      return { data: undefined, error: error };
    }
    return {
      data: undefined,
      error: new postgres.PostgresError("An unknown error occured"),
    };
  }
}
