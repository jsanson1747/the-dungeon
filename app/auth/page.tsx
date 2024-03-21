import AuthForm from "@/components/forms/AuthForm";
import { auth } from "../auth";
import Link from "next/link";
import { Box, Stack } from "@mui/material";

export default async function LoginPage() {
  const session = await auth();

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingTop: 22,
      }}
    >
      <AuthForm session={session} />
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
        {!session && <Link href="/auth/signup">New? Signup here!</Link>}
      </Box>
    </Stack>
  );
}
