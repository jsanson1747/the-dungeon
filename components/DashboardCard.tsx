import { Box, Card, Typography } from "@mui/material";

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
