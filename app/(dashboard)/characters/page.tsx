import { auth } from "@/app/auth";
import { CharacterCard } from "@/components/CharacterCard";
import { Box, Stack, Typography } from "@mui/material";
import { redirect } from "next/navigation";

export default async function CharacterListPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <Box
      sx={{
        padding: 3,
        paddingBottom: 6,
      }}
    >
      <Stack direction="column" spacing={3}>
        <Typography textAlign="center" variant="h1">
          Characters
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
            gap: 3,
            paddingX: 3,
            overflowY: "auto",
            height: "calc(100vh - 196px - 22px)",
          }}
        >
          {[...Array(12)].map((i) => (
            <CharacterCard key={i} />
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
