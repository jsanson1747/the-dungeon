import supabase from "@/supabase/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as argon2 from "argon2";

type AuthUser = {
  id: string;
  username: string;
  password: string;
};

type ReturnableUser = {
  firstName: string;
  id: string;
  lastName: string;
  username: string;
};

type DbUser = {
  created_at: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  username: string;
};

function dbUserToAuthUser(dbUser: DbUser): AuthUser {
  const user: AuthUser = {
    id: dbUser.id.toString(),
    username: dbUser.username,
    password: dbUser.password,
  };
  return user;
}

function buildUserRepresentation(dbUser: DbUser): ReturnableUser {
  const user: ReturnableUser = {
    firstName: dbUser.firstName,
    id: dbUser.id.toString(),
    lastName: dbUser.lastName,
    username: dbUser.username,
  };

  return user;
}

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "User Credential",
      credentials: {
        username: { type: String(), required: true },
        password: { type: String(), required: true },
      },
      authorize: async (credentials) => {
        const { data, error } = await supabase
          .from("users")
          .select()
          .eq("username", credentials.username as string)
          .limit(1)
          .single();

        if (!data) {
          return null;
        }

        const authCredentials = dbUserToAuthUser(data);
        const saltedPassword =
          (credentials.password as string) + data.sodiumChloride;

        if (
          credentials.username === data.username &&
          (await argon2.verify(data.password, saltedPassword))
        ) {
          return buildUserRepresentation(data);
        } else return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
    signOut: "/auth",
  },
  trustHost: true,
});
