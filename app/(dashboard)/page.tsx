import DashboardCard from "@/components/DashboardCard";
import FriendsCard from "@/components/FriendsCard";
import { Box, Grid, Stack } from "@mui/material";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <Box sx={{ padding: 5, height: "90vh" }}>
      <Stack direction="row" gap={2} height="100%">
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid item sm xs md={6}>
            <DashboardCard text="Campaigns" />
          </Grid>
          <Grid item sm xs md={6}>
            <DashboardCard text="Data" />
          </Grid>
          <Grid item sm xs md={6}>
            <DashboardCard text="Characters" />
          </Grid>
          <Grid item sm xs md={6}>
            <DashboardCard text="Reference" />
          </Grid>
        </Grid>
        <FriendsCard />
      </Stack>
    </Box>
  );
}
