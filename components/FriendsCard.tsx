import { theme } from "@/theme";
import { Box, Card, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function FriendsCard() {
  return (
    <Card
      sx={{
        padding: 2,
        display: "grid",
        justifyContent: "center",
        backgroundColor: grey[300],
        [theme.breakpoints.down("md")]: {
          gridRow: "1 / 5",
          gridColumn: "2",
        },
        gridRow: "1 / 3",
        gridColumn: "3",
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
