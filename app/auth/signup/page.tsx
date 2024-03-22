import { auth } from "@/app/auth";
import SignUpForm from "@/components/forms/SignUpForm";
import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";

export default async function SignUpPage() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        paddingTop: 5,
      }}
    >
      <Box sx={{ paddingBottom: 1 }}>
        <Link href="/auth">
          <Button>Back</Button>
        </Link>
      </Box>

      <SignUpForm />
    </Stack>
  );
}
