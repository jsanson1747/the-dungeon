import { auth } from "@/app/auth";
import { Typography } from "@mui/material";
import { redirect } from "next/navigation";

export default async function CharacterPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return <Typography>Character Page</Typography>;
}
