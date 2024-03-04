import DungeonAppBar from "@/components/DungeonAppBar";
import { theme } from "@/theme";
import {
  AppBar,
  Backdrop,
  Box,
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { auth } from "./auth";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Dungeon",
  description: "The Dungeon Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <header>
            <DungeonAppBar session={session} />
          </header>
          <main>
            <Toolbar />
            <CssBaseline />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
