import React, { useState, useEffect } from "react";


import PerformanceGraph from "../../../assets/Axis.png";
import PerformanceGraph1 from "../../../assets/Axis-1.png";
import title from "../../../assets/Legend.png";
import titlesmall from "../../../assets/Legend1.png";
import dots from "../../../assets/DotsVertical.png";
import { StyledBox, HeaderBox, TitleTypography, StyledButton, ContentBox, StyledImage } from "./PerformanceStyled";



const Performance = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <StyledBox>
      <HeaderBox>
        <TitleTypography>Performance</TitleTypography>
        <StyledButton>
          <img src={dots} alt="dots" />
        </StyledButton>
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
