import React from "react";
import { cardDetails } from "../../../data/constants";
import AnalyticsCard from "./AnalyticsCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Analytics = () => {
  const theme = useTheme();
  const isPhoneSize = useMediaQuery(theme.breakpoints.down("sm")); // Checking if screen size is for phone

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isPhoneSize ? "column" : "row",
        gap: "16px",
      }}
    >
      {cardDetails.map((details, index) => (
        <AnalyticsCard key={index} {...details} />
      ))}
    </div>
  );
};

export default Analytics;
