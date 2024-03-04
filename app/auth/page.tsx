import AuthForm from "@/components/forms/AuthForm";
import { auth } from "../auth";
import Link from "next/link";

export default async function LoginPage() {
  const session = await auth();

  return (
    <div>
      <AuthForm session={session} />
      <br />
      {!session && <Link href="/auth/signup">New? Signup here!</Link>}
    </div>
  );
}
