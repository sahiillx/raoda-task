import { Box } from "@mui/material";

// Function to render a status  based on the status of the app.
export const appStatus = (status) => {
  switch (status) {
    case "Active":
      return (
        <Box
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
            fontSize: "12px",
            borderRadius: "50px",
            padding: "2px 10px",
            backgroundColor: "rgba(220, 255, 245, 1)",
            color: "rgba(32, 201, 151, 1)",
          }}
        >
          Active
        </Box>
      );
    case "Pending":
      return (
        <Box
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
            fontSize: "12px",
            borderRadius: "50px",
            padding: "2px 10px",
            backgroundColor: "rgba(255, 234, 216, 1)",
            color: "rgba(253, 126, 20, 1)",
          }}
        >
          Pending
        </Box>
      );
    case "Cancelled":
      return (
        <Box
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
            fontSize: "12px",
            borderRadius: "50px",
            padding: "2px 10px",
            backgroundColor: "rgba(242, 244, 247, 1)",
            color: "rgba(95, 105, 128, 1)",
          }}
        >
          Cancelled
        </Box>
      );
    default:
      return null; // Handle cases where the status doesn't match any options
  }
};
