import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as argon2 from "argon2";
import { getUser } from "@/db/queries";
import { SelectUser } from "@/db/schema/users";
import { AdapterUser } from "next-auth/adapters";

type ReturnableUser = {
  firstName: string;
  id: string;
  lastName: string;
  username: string;
};

function buildUserRepresentation(dbUser: SelectUser): ReturnableUser {
  const user: ReturnableUser = {
    id: dbUser.id.toString(),
    firstName: dbUser.firstName,
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

        if (error) {
          return null;
        }

        const user = data;

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
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log(user);
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as AdapterUser;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
    signOut: "/auth",
  },
  trustHost: true,
});
