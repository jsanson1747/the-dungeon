import AuthForm from "@/components/forms/AuthForm";
import { auth } from "../auth";
import Link from "next/link";
import { Box, Button, Card, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

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
        {!session && (
          <Link href="/auth/signup">
            <Button>New? Sign up here!</Button>
          </Link>
        )}
      </Box>
    </Stack>
  );
}
