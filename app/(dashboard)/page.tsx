import DashboardCard from "@/components/DashboardCard";
import FriendsCard from "@/components/FriendsCard";
import { Box, Grid, Stack } from "@mui/material";
import { auth } from "../auth";
import { redirect } from "next/navigation";
import Link from "next/link";

// The main dashboard

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
            <Link href="/characters" style={{ textDecoration: "none" }}>
              <DashboardCard text="Characters" />
            </Link>
          </Grid>
          <Grid item sm xs md={6}>
            <DashboardCard text="Campaigns" disabled={true} />
          </Grid>
          <Grid item sm xs md={6}>
            <DashboardCard text="Data" disabled={true} />
          </Grid>
          <Grid item sm xs md={6}>
            <DashboardCard text="Reference" disabled={true} />
          </Grid>
        </Grid>
        <FriendsCard />
      </Stack>
    </Box>
  );
}
