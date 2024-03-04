"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { FormEvent, MouseEventHandler, useState } from "react";
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
          <input {...register("username", { required: true })} />
          {errors.username && <span>This field is required</span>}

          <input {...register("password", { required: true })} />
          {errors.username && <span>This field is required</span>}

          <input type="submit" />
        </form>
      )}
      {session && (
        <div className="flex flex-col justify-between h-full">
          <button onClick={handleSignOut} className="w-full mt-4">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
