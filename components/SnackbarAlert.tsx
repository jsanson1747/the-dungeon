"use client";

import { Alert, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export function SnackbarAlert({
  isOpen,
  message,
  severity,
}: {
  isOpen: boolean;
  message: string;
  severity: "success" | "warning" | "error";
}) {
  const [open, setOpen] = useState(isOpen);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      onClose={() => setOpen(false)}
      autoHideDuration={5000}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity={severity}
        variant="filled"
      >
        <Typography>{message}</Typography>
      </Alert>
    </Snackbar>
  );
}
