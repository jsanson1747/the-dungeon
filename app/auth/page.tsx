import AuthForm from "@/components/forms/AuthForm";
import { auth } from "../auth";
import Link from "next/link";
import { Box, Button, Card, Snackbar, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SnackbarAlert } from "@/components/SnackbarAlert";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
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
      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 1 }}>
        <SnackbarAlert
          isOpen={!!searchParams.error}
          message={"An Error Occurred!"}
          severity="error"
        />
        {!session && (
          <Link href="/auth/signup">
            <Button>New? Sign up here!</Button>
          </Link>
        )}
      </Box>
    </Stack>
  );
}
