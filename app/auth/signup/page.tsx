import { auth } from "@/app/auth";
import SignUpForm from "@/components/forms/SignUpForm";
import Link from "next/link";

export default async function SignUpPage() {
  return (
    <div>
      <Link href="/auth">Back</Link>
      <br />
      <h3>{"Let's get setup!"}</h3>
      <SignUpForm />
    </div>
  );
}
