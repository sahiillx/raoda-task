import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components"; // Importing styled-components library

//SC = styled-components
//SC for main-box
export const StyledBox = styled(Box)`
  background-color: white;
  margin: 12px 0;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
`;

//SC for header-box
export const HeaderBox = styled(Box)`
  background-color: white;
  padding: 8px 16px;
  padding-right: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eaecf0;
`;

//SC for title-typography
export const TitleTypography = styled(Typography)`
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: rgba(40, 40, 40, 1);
`;

//SC for content-box
export const StyledButton = styled(Button)`
  padding: 0;
  min-width: auto;
`;
//SC for content-box
export const ContentBox = styled(Box)`
  padding: 8px 0;
`;

//SC for image
export const StyledImage = styled.img`
  width: 100%;
`;
