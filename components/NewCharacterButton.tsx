"use client";

import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/navigation";

export function NewCharacterButton() {
  const router = useRouter();

  return (
    <IconButton
      onClick={() => {
        router.replace("/characters/create");
      }}
      sx={{ width: "max-content" }}
    >
      <AddIcon sx={{ fontSize: 100, color: grey[500] }} />
    </IconButton>
  );
}
