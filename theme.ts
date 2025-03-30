"use client";

import { grey, lime } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Ubuntu } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: lime[400],
    },

    background: {
      default: grey[400],
    },
  },
  typography: {
    fontFamily: ubuntu.style.fontFamily,
    fontSize: 16,
    h1: {
      fontSize: 50,
      fontWeight: 500,
    },
    h2: {
      fontSize: 40,
      fontWeight: 400,
    },
    h3: {
      fontSize: 30,
      fontWeight: 300,
    },
  },
});

export const background = grey[400];
