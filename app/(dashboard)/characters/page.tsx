import { auth } from "@/app/auth";
import { BackButton } from "@/components/BackButton";
import { CharacterCard } from "@/components/CharacterCard";
import { Box, Button, Stack, Typography } from "@mui/material";
import { redirect } from "next/navigation";

export default async function CharacterListPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  const user = session.user;

  const response = await fetch(
    `http://localhost:3000/api/users/${user.id}/characters`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }

  const characters = (await response.json()).data;

  return (
    <Box
      sx={{
        padding: 3,
        paddingBottom: 6,
      }}
    >
      <Stack direction="column" spacing={3}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            paddingX: 3,
          }}
        >
          <BackButton href="/" sx={{ justifySelf: "flex-start" }} />
          <Typography textAlign="center" variant="h1">
            Characters
          </Typography>
        </Box>
        {characters.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "calc(100vh - 196px - 22px)",
            }}
          >
            <Typography variant="h2">No characters found</Typography>
          </Box>
        ) : (
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
            {characters.map((character, index) => (
              <CharacterCard key={index} />
            ))}
          </Box>
        )}
      </Stack>
    </Box>
  );
}
