"use client";

import {
  Box,
  Button,
  Card,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
    <Card>
      <Box sx={{ padding: 3 }}>
        {!session && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography color="text.secondary" textAlign="center" variant="h4">
              Log In
            </Typography>
            <Stack paddingTop={2.8}>
              <TextField
                label="Username"
                {...register("username", { required: true })}
                error={Boolean(errors.username)}
                helperText={errors.username ? "This field is required" : null}
                sx={{ marginBottom: errors.username ? 0 : 2.8 }}
              />

              <TextField
                label="Password"
                {...register("password", { required: true })}
                type="password"
                error={Boolean(errors.password)}
                helperText={errors.password ? "This field is required" : null}
                sx={{ marginBottom: errors.password ? 0 : 2.8 }}
              />

              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </Stack>
          </form>
        )}
        {session && (
          <Stack>
            <Link href="/">Back</Link>
            <button onClick={handleSignOut}>Sign out</button>
          </Stack>
        )}
      </Box>
    </Card>
  );
}
