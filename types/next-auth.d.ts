import NextAuth, { DefaultSession } from "next-auth";
import { User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

declare module "next-auth/adapters" {
  interface AdapterUser extends User {
    firstName: string;
    id: string;
    lastName: string;
    username: string;
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: AdapterUser;
  }
}
