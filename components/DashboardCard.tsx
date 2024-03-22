import { Box, Card, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function DashboardCard({ text }: { text: string }) {
  return (
    <Card
      sx={{
        padding: 2,
        minWidth: "150px",
        height: "100%",
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: grey[50],
      }}
    >
      <Box>
        <Typography
          sx={{ textAlign: "center", fontWeight: 500, fontSize: "20px" }}
        >
          {text}
        </Typography>
      </Box>
    </Card>
  );
}

export default DashboardCard;
