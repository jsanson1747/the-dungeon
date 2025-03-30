"use client";

import { Button, SxProps, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export function BackButton({ href, sx }: { href: string; sx?: SxProps }) {
  const router = useRouter();

  return (
    <Button
      variant="contained"
      sx={sx}
      onClick={() => {
        router.push(href);
      }}
    >
      <Typography>BACK</Typography>
    </Button>
  );
}
