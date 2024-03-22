"use client";

import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
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
    <Card sx={{ backgroundColor: grey[50] }}>
      <Box sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography color="text.secondary" textAlign="center" variant="h4">
            Sign Up
          </Typography>
          <Stack paddingTop={2.8}>
            <TextField
              label="First Name"
              {...register("firstName", { required: true })}
              error={Boolean(errors.firstName)}
              helperText={errors.username ? "This field is required" : null}
              sx={{
                marginBottom: errors.username ? 0 : 2.86,
              }}
            />
            <TextField
              label="Last Name"
              {...register("lastName", { required: true })}
              error={Boolean(errors.lastName)}
              helperText={errors.username ? "This field is required" : null}
              sx={{
                marginBottom: errors.username ? 0 : 2.86,
              }}
            />
            <TextField
              label="Create Username"
              {...register("username", { required: true })}
              error={Boolean(errors.username) || exists}
              helperText={
                exists
                  ? "Username unavailable"
                  : errors.username
                  ? "This field is required"
                  : null
              }
              sx={{
                marginBottom: errors.username ? 0 : 2.86,
              }}
            />
            <TextField
              label="Create Password"
              {...register("password", {
                required: true,
                validate: (val: string) => {
                  if (watch("confirmation") != val) {
                    return "Passwords must match!";
                  }
                },
              })}
              type="password"
              error={Boolean(errors.password)}
              helperText={
                errors.password
                  ? errors.password.message
                    ? errors.password.message
                    : "This field is required"
                  : null
              }
              sx={{
                marginBottom: errors.username ? 0 : 2.86,
              }}
            />
            <TextField
              label="Confirm Password"
              {...register("confirmation", {
                required: true,
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Passwords must match!";
                  }
                },
              })}
              type="password"
              error={Boolean(errors.confirmation)}
              helperText={
                errors.confirmation
                  ? errors.confirmation.message
                    ? errors.confirmation.message
                    : "This field is required"
                  : null
              }
              sx={{
                marginBottom: errors.username ? 0 : 2.86,
              }}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Card>
  );
}
