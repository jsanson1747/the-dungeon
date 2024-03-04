import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function DungeonAppBar() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography fontSize={25}>The Dungeon</Typography>
        <Link href="/api/auth/signout">Logout</Link>
      </Toolbar>
    </AppBar>
  );
}
