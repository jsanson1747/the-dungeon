'use client'

import { grey, lime } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: lime[400],
    },

    background: {
      default: grey[400]
    }
  },
})

export const background = grey[400]