"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  session: Session | null;
}

export default function AuthForm({ session }: Props) {
  type Inputs = {
    username: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) =>
    await signIn("credentials", {
      username: data.username,
      password: data.password,
      callbackUrl: "/",
    });

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div>
      {!session && (
        <form onSubmit={handleSubmit(onSubmit)}>
          Username
          <br />
          <input {...register("username", { required: true })} />
          {errors.username && <span>This field is required</span>}
          <br />
          Password
          <br />
          <input
            {...register("password", { required: true })}
            type="password"
          />
          {errors.password && <span>This field is required</span>}
          <br />
          <input type="submit" />
        </form>
      )}
      {session && (
        <div>
          <Link href="/">Back</Link>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  );
}
