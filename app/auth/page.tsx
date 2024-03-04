import AuthForm from "@/components/AuthForm";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { auth } from "../auth";

export default async function LoginPage() {
  const session = await auth();
  
  return <AuthForm session={session} />;
}
