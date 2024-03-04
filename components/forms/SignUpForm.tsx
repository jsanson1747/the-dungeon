"use client";

import { redirect } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function SignUpForm() {
  const [exists, setExists] = useState(false);

  type Inputs = {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    confirmation: string;
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setExists(false);
    const response = await fetch("/api/users/create-user", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        password: formData.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.ok) {
      window.location.pathname = "/auth";
    } else {
      setExists(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        First Name
        <br />
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <span>This field is required</span>}
        <br />
        Last Name
        <br />
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <span>This field is required</span>}
        <br />
        Create a Username
        <br />
        <input {...register("username", { required: true })} />
        {errors.username && <span>This field is required</span>}
        <br />
        Create a Password
        <br />
        <input
          {...register("password", {
            required: true,
            validate: (val: string) => {
              if (watch("confirmation") != val) {
                return "Passwords must match!";
              }
            },
          })}
          type="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
        {errors.password &&
          errors.password.message !== "Passwords must match!" && (
            <span>This field is required</span>
          )}
        <br />
        Confirm Password
        <br />
        <input
          {...register("confirmation", {
            required: true,
            validate: (val: string) => {
              if (watch("password") != val) {
                return "Passwords must match!";
              }
            },
          })}
          type="password"
        />
        {errors.confirmation && <span>{errors.confirmation.message}</span>}
        {errors.confirmation &&
          errors.confirmation.message !== "Passwords must match!" && (
            <span>This field is required</span>
          )}
        <br />
        <input type="submit" />
      </form>
      {exists && <div>Username already exists</div>}
    </div>
  );
}
