import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import notification from "../../../assets/IconIndicator.png";
import calender from "../../../assets/calendar.png";
import avatar from "../../../assets/Avatar.png";
import appicon from "../../../assets/app-icon.png";
import { Search, SearchIconWrapper, StyledInputBase } from "./NavbarStyled";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
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

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = isMobile ? (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="small" color="inherit" sx={{ marginRight: 1 }}>
          <img src={notification} alt="notificationicon" />
        </IconButton>
        <p>Notification</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="small" color="inherit" sx={{ marginRight: 1 }}>
          <img src={calender} alt="calendericon" />
        </IconButton>
        <p>Events</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="small" color="inherit" sx={{ marginRight: 1 }}>
          <img src={appicon} alt="appicon" />
        </IconButton>
        <p>Menu</p>
      </MenuItem>
    </Menu>
  ) : null;

  const drawerWidth = 240;

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "rgba(40,40,40,1)", fontSize: 22 }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
              <img src={notification} alt="notificationicon" />
            </IconButton>
            <IconButton size="large" color="inherit">
              <img src={calender} alt="calendericon" />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              sx={{ marginRight: 0.5 }}
            >
              <img src={appicon} alt="appicon" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <img src={avatar} alt="avatar" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
