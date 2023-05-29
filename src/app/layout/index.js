import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
//mui
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExploreIcon from "@mui/icons-material/Explore";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
//local folder
// import { Logout } from "../Login/sliceUsers";
import "./layout.css";
import { LayoutRoutes } from "../router";
import { DB_Init } from "../DBSlice/SliceDB";
import { colors } from "@mui/material";
import { AddToQueue, People } from "@mui/icons-material";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor:'white',
  color:'#0d73bb',
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Layout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const vRdxuserInfo = useSelector((state) => state.SliceDB.value.login);
  const vMediaQuery = useMediaQuery("(max-width:798px)");
  const [sActiveNav, setActiveNav] = useState("/");
  const [sDrawer, setDrawer] = useState(false);
  const fLogout = () => {
    dispatch(DB_Init({}));
    navigate("/");
    //   return  removePresist();
  };

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  let sideMenu = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      navigateTo: "/",
      id: "/",
    },
    {
      name: "Tickets",
      icon: <AddToQueue />,
      navigateTo: "/Tickets",
      id: "/Tickets",
    },
    {
      name: "Employee",
      icon: <People />,
      navigateTo: "/EmployeeList",
      id: "/EmployeeList",
    }
  ];
  return (
    <Box sx={{ display: "flex" }} className="main-layout">
      <CssBaseline />
      <AppBar position="fixed" open={sDrawer}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
               
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    // onClick={fDrawerOpen}
                    onClick={() => setDrawer(true)}
                    edge="start"
                    sx={{
                      marginRight: 5,
                      ...(sDrawer && { display: "none" }),
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
               

                <Typography variant="h6" noWrap component="div">
                  Ticket Management
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
                className="userLogo"
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                 // onClick={removePresist}
                >
                  <span
                    onClick={() => {
                      navigate("/");
                      fLogout();
                    }}
                  >
                    {vRdxuserInfo.UserName} &nbsp;
                    <LogoutIcon />
                  </span>
                </Typography>
                {/* <div className="logout">
                                    <span className="pe-1">Logout</span>
                                </div> */}
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      {/* sidesmall menu */}
     
        <Drawer variant="permanent" open={sDrawer} PaperProps={{sx:{}}}>
          <DrawerHeader>
            <IconButton onClick={() => setDrawer(false)}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <List>
            {sideMenu.map((obj, index) => (
              <ListItem
                key={"sidenav" + index}
                
                sx={{
                  display: "block",
                  bgcolor: sActiveNav === obj.id ? "var(--primary)" : "",
                  color: sActiveNav === obj.id ? "white" : "var(--tertiary)",
                }}
                id={obj.id}
                onClick={() => {
                  navigate(obj.navigateTo);
                  setActiveNav(obj.id);
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: sDrawer ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color:
                        sActiveNav === obj.id
                          ? "var(--commonText)"
                          : "black",
                      minWidth: 0,
                      mr: sDrawer ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {obj.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={obj.name}
                    className="title"
                    sx={{
                      opacity: sDrawer ? 1 : 0,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            {/* <Accordion className="accordian-layout-toggle">
              <AccordionSummary
                // expandIcon={<DashboardIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => {
                  setActiveNav("/Dashboard");
                  setDrawer(true);
                }}
                sx={{
                  bgcolor: sActiveNav === "/WmsInbound" ? "var(--primary)" : "",
                  color:
                    sActiveNav === "/WmsInbound" ? "white" : "var(--tertiary)",
                  // minWidth: 0,
                  // mr: sDrawer ? 3 : "auto",
                  // justifyContent: "center",
                }}
              >
                {sDrawer ? (
                  <>
                    <ExploreIcon className="me-4" />
                    <Typography>WMS</Typography>
                  </>
                ) : (
                  <>
                    <ExploreIcon className="me-2" />
                  </>
                )}
              </AccordionSummary>
              {sDrawer ? (
                <AccordionDetails>
                  <Accordion className="p-0">
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="ps-4"
                    >
                      <Typography className="gnr-title-txt">
                        <HorizontalRuleRoundedIcon fontSize="small" />{" "}
                        Transaction
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      onClick={() => {
                        navigate("/WmsInboundGRN");
                        setDrawer(!vMediaQuery);
                        // setActiveNav("/WmsInbound");
                      }}
                    >
                      <Typography className="ps-4  gnr-title-txt">
                        <HorizontalRuleRoundedIcon fontSize="small" /> Wms
                        Inbound GRN
                      </Typography>
                    </AccordionDetails>                          
                  </Accordion>
                </AccordionDetails>
              ) : (
                ""
              )}
            </Accordion> */}
          </List>
        </Drawer>
      

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <LayoutRoutes />
      </Box>
    </Box>
  );
};

export default Layout;
