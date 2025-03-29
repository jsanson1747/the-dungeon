import { db } from "./index";
import { InsertUser, SelectUser, users } from "./schema/users";
import { eq } from "drizzle-orm";
import { characters, SelectCharacter } from "./schema/characters";

class DrizzleError extends Error {
  code: number;

  constructor(message: string, options?: { code?: number }) {
    super(message);
    this.code = options?.code || 500;
  }
}

type QueryReturnType<T> =
  | { data: T; error: undefined }
  | { data: undefined; error: DrizzleError };

export async function createUser(
  data: InsertUser
): Promise<QueryReturnType<InsertUser>> {
  try {
    return {
      data: (await db.insert(users).values(data).returning())[0],
      error: undefined,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { data: undefined, error: new DrizzleError(error.message) };
    }
    return {
      data: undefined,
      error: new DrizzleError("An unknown error occured"),
    };
  }
}

export async function getUserByUsername(
  username: string
): Promise<QueryReturnType<SelectUser>> {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.username, username),
    });
    if (user) {
      return {
        data: user,
        error: undefined,
      };
    } else {
      return {
        data: undefined,
        error: new DrizzleError("User not found", { code: 404 }),
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        data: undefined,
        error: new DrizzleError(error.message),
      };
    } else {
      return {
        data: undefined,
        error: new DrizzleError("An unknown error occured"),
      };
    }
  }
}

export async function getUserById(
  userId: number
): Promise<QueryReturnType<SelectUser>> {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.id, userId),
    });
    if (user) {
      return {
        data: user,
        error: undefined,
      };
    } else {
      return {
        data: undefined,
        error: new DrizzleError("User not found", { code: 404 }),
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        data: undefined,
        error: new DrizzleError(error.message),
      };
    } else {
      return {
        data: undefined,
        error: new DrizzleError("An unknown error occured"),
      };
    }
  }
}

export async function getUserCharacters(
  userId: number
): Promise<QueryReturnType<SelectCharacter[]>> {
  try {
    const { data: user, error } = await getUserById(userId);

    if (error) {
      return {
        data: undefined,
        error: new DrizzleError("User not found", { code: 404 }),
      };
    }

    const userCharacters = await db.query.characters.findMany({
      where: eq(characters.userId, user.id),
    });

    return {
      data: userCharacters,
      error: undefined,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        data: undefined,
        error: new DrizzleError(error.message),
      };
    } else {
      return {
        data: undefined,
        error: new DrizzleError("An unknown error occured"),
      };
    }
  }
}
