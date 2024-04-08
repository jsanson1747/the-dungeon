import { Box, Card, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function DashboardCard({
  text,
  disabled,
}: {
  text: string;
  disabled?: boolean;
}) {
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
        backgroundColor: !disabled ? grey[50] : grey[300],
      }}
    >
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: "20px",
            color: !disabled ? "text.primary" : "text.secondary",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Card>
  );
}

export default DashboardCard;
