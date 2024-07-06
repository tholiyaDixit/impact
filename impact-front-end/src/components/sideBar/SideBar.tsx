import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "../../images/svg/bars-staggered.svg";
import whiteMenuIcon from "../../images/svg/menu-alt-1-svgrepo-com.svg";
import whiteLeftIcon from "../../images/svg/left-arrow-svgrepo-com.svg";
import leftArrow from "../../images/svg/small-left.svg";
import mailIcon from "../../images/svg/email.svg";
import imgSvg from "../../images/svg/picture-svgrepo-com.svg";
import jsonSvg from "../../images/svg/email.svg";
import inboxIcon from "../../images/svg/inbox-in.svg";
import userIcon from "../../images/svg/user.svg";
import trashIcon from "../../images/svg/trash.svg";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./SideBar.scss";
import ImageToUrl from "../../pages/imageToUrl/ImageToUrl";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import logo from "../../images/impact-logo.png";
import CustomLogin from "../../popup/customLoginPopup/CustomLogin";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
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

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
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

export default function SideBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [customLoginPopup, setCustomLoginPopup] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDropdown = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const allPage = ["Image Base64", "SignUp"];
  const dropdown = ["Profile", "My account"];
  // const sideImg =
  const showImage = (path: string): any => {
    let showImages =
      path == "Image Base64" ? imgSvg : path == "SignUp" ? userIcon : jsonSvg;
    return (
      <>
        <img src={showImages} alt="" style={{ width: "15px" }} />
      </>
    );
  };

  const handleClickDropdown = (path?: string) => {
    setAnchorEl(null);
    !!path && navigate(path);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              setOpen(true);
            }}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            {/* <MenuIcon />  */}

            <img src={whiteMenuIcon} alt="" style={{ width: "25px" }} />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
          <div>
            <Button
              id="basic-button"
              aria-controls={openDropdown ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openDropdown ? "true" : undefined}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setAnchorEl(event.currentTarget);
              }}
            >
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openDropdown}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {!!dropdown &&
                dropdown.map((item: any, index: number) => {
                  return (
                    <>
                      <MenuItem
                        key={index}
                        onClick={() => {
                          // handleClose()
                          setAnchorEl(null);
                          navigate(item);
                        }}
                      >
                        {item}
                      </MenuItem>
                    </>
                  );
                })}
              <MenuItem
                onClick={() => {
                  setCustomLoginPopup(true);
                  setAnchorEl(null);
                }}
              >
                CustomLogin
                {/* <CustomLogin /> */}
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
          // onClick={() => {
          //   setOpen(false);
          // }}
          >
            <img src={logo} alt="" width={"180px"} />
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
            {theme.direction === "rtl" ? (
              1
            ) : (
              <img
                src={whiteLeftIcon}
                alt=""
                style={{ width: "25px" }}
                onClick={() => {
                  setOpen(false);
                }}
              />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {allPage.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(text);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {showImage(text)}
                  {/* {index % 2 === 0 ? (
                    <img src={imgSvg} alt="" style={{ width: "15px" }} />
                  ) : (
                    <img src={imgSvg} alt="" style={{ width: "15px" }} />
                  )} */}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam', 'image to url'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              // onClick={() => navigate(text)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <img src={mailIcon} alt="" style={{width:"15px"}} /> : <img src={userIcon} alt="" style={{width:"15px"}} /> }
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
        <DrawerHeader />
        <CustomLogin
          open={customLoginPopup}
          onClosePopup={() => {
            setCustomLoginPopup(false);
          }}
        />

        {/* <BrowserRouter>
          <Routes>
            <Route path="/ImageToUrl" element={<ImageToUrl />} />
          </Routes>
        </BrowserRouter> */}
      {/* </Box> */}
    </Box>
  );
}
