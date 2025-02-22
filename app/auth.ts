import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as argon2 from "argon2";
import { getUser } from "@/db/queries";
import { SelectUser } from "@/db/schema";

type ReturnableUser = {
  firstName: string;
  id: string;
  lastName: string;
  username: string;
};

function buildUserRepresentation(dbUser: SelectUser): ReturnableUser {
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
        const { data, error } = await getUser(credentials.username as string);

        if (data?.length === 0) {
          return null;
        }

        if (error) {
          return null;
        }

        const user = data[0];

        const saltedPassword =
          (credentials.password as string) + user.sodiumChloride;

        if (
          credentials.username === user.username &&
          (await argon2.verify(user.password, saltedPassword))
        ) {
          return buildUserRepresentation(user);
        } else return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      //@ts-ignore
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
    signOut: "/auth",
  },
  trustHost: true,
});
