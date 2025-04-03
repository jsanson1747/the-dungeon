"use client";

import { theme } from "@/theme";
import { Box } from "@mui/material";
import Link from "next/link";
import DashboardCard from "./DashboardCard";
import FriendsCard from "./FriendsCard";

export function DashboardContent() {
  return (
    <Box sx={{ padding: 5, height: "calc(100vh - 68px)" }}>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "1fr 2fr",
            gridTemplateRows: "1fr 1fr 1fr 1fr",
          },
          gridTemplateColumns: "1fr 1fr 2fr",
          gridTemplateRows: "1fr 1fr",
          height: "100%",
        }}
      >
        <Link href="/characters" style={{ textDecoration: "none" }}>
          <DashboardCard text="Characters" />
        </Link>
        <DashboardCard text="Campaigns" disabled={true} />
        <DashboardCard text="Data" disabled={true} />
        <DashboardCard text="Reference" disabled={true} />
        <FriendsCard />
      </Box>
    </Box>
  );
}
