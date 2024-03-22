import { Box, Card, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function FriendsCard() {
  return (
    <Card
      sx={{
        padding: 2,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: grey[50],
      }}
    >
      <Typography
        sx={{ textAlign: "center", fontWeight: 500, fontSize: "20px" }}
      >
        Friends
      </Typography>
    </Card>
  );
}

export default FriendsCard;
