import { CharacterSummary } from "@/domain-model/api/schema";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";

export function CharacterCard({
  characterSummary,
}: {
  characterSummary: CharacterSummary;
}) {
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
      <Link href={`/characters/${characterSummary.id}`}>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            height: "100%",
            justifyContent: "center",
            backgroundColor: grey[100],
          }}
        >
          <Typography variant="h2">{characterSummary.name}</Typography>
        </Box>
      </Link>
    </Card>
  );
}
