import { auth } from "@/app/auth";
import { client } from "@/client";
import { BackButton } from "@/components/BackButton";
import { CharacterCard } from "@/components/CharacterCard";
import { NewCharacterButton } from "@/components/NewCharacterButton";
import { NewCharacterCard } from "@/components/NewCharacterCard";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { redirect } from "next/navigation";

export default async function CharacterListPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  const user = session.user;

  const { data: characterSummaries, error } = await client.GET(
    "/users/{userId}/characters",
    {
      params: {
        path: { userId: user.id },
      },
    }
  );

  if (error) {
    throw new Error(error.message);
  }

  // characterSummary = { data: [...Array(0)] };

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
        {characterSummaries.data.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "calc(100vh - 196px - 23px)",
            }}
          >
            <Stack sx={{ alignItems: "center", gap: 1 }}>
              <Typography variant="h3">No characters found</Typography>
              <NewCharacterButton />
            </Stack>
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
              gap: 3,
              paddingX: 3,
              overflowY: "auto",
              height: "calc(100vh - 196px - 23px)",
            }}
          >
            <NewCharacterCard />
            {characterSummaries.data.map((characterSummary) => (
              <CharacterCard
                key={characterSummary.id}
                characterSummary={characterSummary}
              />
            ))}
          </Box>
        )}
      </Stack>
    </Box>
  );
}
