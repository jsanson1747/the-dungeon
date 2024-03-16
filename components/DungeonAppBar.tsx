import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
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
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography fontSize={25}>The Dungeon</Typography>
          <Stack alignItems="flex-end">
            {session && (
              //@ts-ignore
              <Typography>Hello {session?.user?.firstName}</Typography>
            )}
            {session && <Link href="/api/auth/signout">Logout</Link>}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
