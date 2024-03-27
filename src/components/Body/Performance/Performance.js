import React, { useState, useEffect } from "react";

// Importing assets
import PerformanceGraph from "../../../assets/Axis.png";
import PerformanceGraph1 from "../../../assets/Axis-1.png";
import title from "../../../assets/Legend.png";
import titlesmall from "../../../assets/Legend1.png";

// Importing styled components
import {
  StyledBox,
  HeaderBox,
  TitleTypography,
  ContentBox,
  StyledImage,
} from "./PerformanceStyled";

// Functional component for Performance
const Performance = () => {

  //Detecting mobile view
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <StyledBox>
      <HeaderBox>
        <TitleTypography>Performance</TitleTypography>
      </HeaderBox>
      <ContentBox>
        <StyledImage
          src={isMobile ? PerformanceGraph1 : PerformanceGraph}
          alt="Performance Graph"
        />
      </ContentBox>
      <ContentBox>
        <StyledImage src={isMobile ? titlesmall : title} alt="title" />
      </ContentBox>
    </StyledBox>
  );
};

export default Performance;
