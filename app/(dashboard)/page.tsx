"use client";

import DashboardCard from "@/components/DashboardCard";
import FriendsCard from "@/components/FriendsCard";
import { Box, Grid, Stack } from "@mui/material";

export default function Dashboard() {
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

    // <Box sx={{ padding: 5, height: "90vh" }}>
    // <Stack direction="row" gap={2} height="100%">
    // <Stack direction="row">
    //   <Box
    //     sx={{
    //       display: "grid",
    //       gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
    //       gap: 2,
    //       padding: 3,
    //     }}
    //   >
    //     <DashboardCard text="Campaigns" />
    //     <DashboardCard text="Data" />
    //     <DashboardCard text="Characters" />
    //     <DashboardCard text="Reference" />
    //   </Box>
    //   <FriendsCard />
    // </Stack>
    // </Box>
  );
}
