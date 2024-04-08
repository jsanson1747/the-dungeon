import { Box, Card, Stack, Typography } from "@mui/material";
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
        backgroundColor: grey[300],
      }}
    >
      <Stack>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: "20px",
            color: "text.secondary",
          }}
        >
          Friends
        </Typography>
        <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 500,
              fontSize: "20px",
              color: "text.secondary",
            }}
          >
            Coming Soon!
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export default FriendsCard;
