import { React, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

//Importing assests
import FriendsIcon from "../../assets/user.png";
import ListItem from "@mui/material/ListItem";
import AppIcon from "../../assets/app-icon.png";
import HelpCenter from "../../assets/Support.png";
import FileManager from "../../assets/Folder.png";
import Setting from "../../assets/Settings.png";
import Logout from "../../assets/logout.png";
import Globe from "../../assets/globe.png";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Branding from "../../assets/clonify.png";
import DashboardIcon from "../../assets/Stats.png";
import MessagesIcon from "../../assets/emailmessages.png";

const drawerWidth = 240; // Define drawer width

function Sidebar(props) {
  const { window } = props;
  const [activeItem, setActiveItem] = useState(null); // State to track active item

  const [activeSubItem, setActiveSubItem] = useState(null); // State to track active sub-item
  const [openItems, setOpenItems] = useState({
    // State to track open items
    dashboard: false,
    messages: false,
    friends: false,
    app: false,
    help_center: false,
    file_manager: false,
  });

  // Function to handle click on list item
  const handleItemClick = (item) => {
    setActiveItem(item);
    setActiveSubItem(null);
    setOpenItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  // Function to handle click on sub-list item
  const handleSubItemClick = (subItem) => {
    setActiveSubItem(subItem);
  };

  // Sidebar drawer
  const drawer = (
    <div style={{ width: { drawerWidth } }}>
      <Toolbar>
        <img src={Branding} alt="logo" width="100px" />
      </Toolbar>
      <List>
        <ListItem sx={{ mx: 1.5 }}>
          <ListItemText
            primary="Dashboard"
            primaryTypographyProps={{
              style: {
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#9D9FA1",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "20px",
                textAlign: "left",
              },
            }}
          />
        </ListItem>
        <List>
          {[
            {
              key: "dashboard",
              text: "Dashboard",
              subItems: ["Analytics", "Finance", "Job Board"],
            },
            {
              key: "messages",
              text: "Messages",
              subItems: ["Inbox", "Starred", "Snoozed"],
            },
            {
              key: "friends",
              text: "Friends",
              subItems: ["Alex", "John", "Amanda"],
            },
            {
              key: "app",
              text: "App",
              subItems: ["Facebook", "Instagram", "Whatsapp"],
            },
          ].map((item) => (
            <div key={item.key}>
              <ListItem disablePadding>
                <ListItemButton
                  selected={activeItem === item.key}
                  onClick={() => handleItemClick(item.key)}
                >
                  <ListItemIcon
                    sx={{ paddingLeft: "20px", marginRight: "-20px" }}
                  >
                    {item.key === "dashboard" && (
                      <img src={DashboardIcon} alt="Dashboard" />
                    )}
                    {item.key === "messages" && (
                      <img src={MessagesIcon} alt="Messages" />
                    )}
                    {item.key === "friends" && (
                      <img src={FriendsIcon} alt="Friends" />
                    )}
                    {item.key === "app" && <img src={AppIcon} alt="App" />}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      style: {
                        color:
                          activeItem === item.key
                            ? "rgba(40, 40, 40, 1)"
                            : "rgba(95, 105, 128, 1)",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "22px",
                        textAlign: "left",
                        paddingLeft: "0px",
                      },
                    }}
                  />
                  {openItems[item.key] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </ListItemButton>
              </ListItem>
              <Collapse in={openItems[item.key]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem key={subItem} disablePadding>
                      <ListItemButton
                        selected={activeSubItem === subItem}
                        onClick={() => handleSubItemClick(subItem)}
                        sx={{ pl: 9 }}
                      >
                        <ListItemText
                          primary={subItem}
                          primaryTypographyProps={{
                            style: {
                              color:
                                activeItem === item.key
                                  ? "rgba(40, 40, 40, 1)"
                                  : "rgba(95, 105, 128, 1)",
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              fontWeight: "600",
                              lineHeight: "22px",
                              textAlign: "left",
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
        {/* Pages */}
        <ListItem sx={{ mx: 1.5 }}>
          <ListItemText
            primary="Pages"
            primaryTypographyProps={{
              style: {
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#9D9FA1",
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "20px",
                textAlign: "left",
              },
            }}
          />
        </ListItem>
        <List>
          {[
            {
              key: "help_center",
              text: "Help Center",
              subItems: ["FAQs", "Privacy Policy", "Contact Us"],
            },
            {
              key: "file_manager",
              text: "File Manager",
              subItems: ["Recents File", "Upload", "Recycle Bin"],
            },
          ].map((item) => (
            <div key={item.key}>
              <ListItem disablePadding>
                <ListItemButton
                  selected={activeItem === item.key}
                  onClick={() => handleItemClick(item.key)}
                >
                  <ListItemIcon
                    sx={{ paddingLeft: "20px", marginRight: "-20px" }}
                  >
                    {item.key === "help_center" && (
                      <img src={HelpCenter} alt="Help Center" />
                    )}
                    {item.key === "file_manager" && (
                      <img src={FileManager} alt="File Manager" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      style: {
                        color:
                          activeItem === item.key
                            ? "rgba(40, 40, 40, 1)"
                            : "rgba(95, 105, 128, 1)",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "22px",
                        textAlign: "left",
                      },
                    }}
                  />
                  {openItems[item.key] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </ListItemButton>
              </ListItem>
              <Collapse in={openItems[item.key]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem key={subItem} disablePadding>
                      <ListItemButton
                        selected={activeSubItem === subItem}
                        onClick={() => handleSubItemClick(subItem)}
                        sx={{ pl: 9 }}
                      >
                        <ListItemText
                          primary={subItem}
                          primaryTypographyProps={{
                            style: {
                              color:
                                activeItem === item.key
                                  ? "rgba(40, 40, 40, 1)"
                                  : "rgba(95, 105, 128, 1)",
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              fontWeight: "600",
                              lineHeight: "22px",
                              textAlign: "left",
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </List>
      {/* Footer */}

      <Box
        sx={{
          p: 2,
          borderTop: "1px solid #EAECF0",
          display: "flex",
          alignItems: "bottom",
          justifyContent: "space-between",
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          width: "208px",
        }}
      >
        <img
          src={Setting}
          alt="source icon"
          style={{ marginRight: "0px", verticalAlign: "middle" }}
        />
        <img
          src={Logout}
          alt="source icon"
          style={{ marginRight: "0px", verticalAlign: "middle" }}
        />
        <img
          src={Globe}
          alt="source icon"
          style={{ marginRight: "0px", verticalAlign: "middle" }}
        />
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflowX: "hidden",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
