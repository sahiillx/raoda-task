import React from "react";
import { Paper, Box, Toolbar } from "@mui/material";
import styled from "styled-components"; // Import styled from styled-components
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Body/Navbar/Navbar";
import Analytics from "./components/Body/Analytics/Analytics";
import HeaderCard from "./components/Body/Premium/Premium";
import Performance from "./components/Body/Performance/Performance";
import InstalledApps from "./components/Body/InstalledApps/InstalledApps";
import { data } from "./data/constants";
import "./App.css";

// SC = Styled components
// SC for Paper
const StyledPaper = styled(Paper)`
  padding: 20px;
  min-height: 100vh;
`;

//SC for main-box
const MainBox = styled(Box)`
  display: flex;
`;

//SC for main-content
const MainContent = styled(Box)`
  flex-grow: 1;
  padding: 1px;
  width: 100%;
  @media (min-width: 600px) {
    width: calc(100% - 240px);
  }
  background-color: #f2f4f7;
`;

function App() {
  return (
    <StyledPaper
      style={{
        backgroundColor: "#F2F4F7",
      }}
      elevation={3}
    >
      <MainBox>
        <Navbar />
        <Sidebar />
        <MainContent component="main">
          <Toolbar />
          <HeaderCard />
          <Analytics />
          <Performance />
          {/* Render InstalledApps component and pass data prop */}
          <InstalledApps data={data} />
        </MainContent>
      </MainBox>
    </StyledPaper>
  );
}

export default App;
