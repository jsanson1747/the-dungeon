import { Box, Card } from "@mui/material";
import { grey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

export function NewCharacterCard() {
  return (
    <Card
      sx={{
        minWidth: 300,
        minHeight: 400,
        ":hover": {
          boxShadow: 8,
        },
        "& a": {
          textDecoration: "none",
          color: "inherit",
        },
      }}
    >
      <Link href="/characters/create">
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: grey[300],
          }}
        >
          <AddIcon sx={{ fontSize: 100, color: grey[500] }} />
        </Box>
      </Link>
    </Card>
  );
}
