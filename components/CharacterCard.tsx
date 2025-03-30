import { Card } from "@mui/material";

export function CharacterCard() {
  return (
    <Card
      sx={{
        display: "flex",
        flexGrow: 1,
        minWidth: 300,
        minHeight: 400,
        justifyContent: "center",
      }}
    ></Card>
  );
}
