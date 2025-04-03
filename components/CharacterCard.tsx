import { CharacterSummary } from "@/domain-model/api/schema";
import { Box, Card } from "@mui/material";
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
            alignItems: "center",
            backgroundColor: grey[100],
          }}
        >
          {/* Todo: Character summary here */}
        </Box>
      </Link>
    </Card>
  );
}
