import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function DungeonAppBar() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography fontSize={25}>The Dungeon</Typography>
      </Toolbar>
    </AppBar>
  );
}
