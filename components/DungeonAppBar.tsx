import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Session } from "next-auth";
import Link from "next/link";

export default function DungeonAppBar({
  session,
}: {
  session: Session | null;
}) {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography fontSize={25}>The Dungeon</Typography>
        {session && <Link href="/api/auth/signout">Logout</Link>}
      </Toolbar>
    </AppBar>
  );
}
