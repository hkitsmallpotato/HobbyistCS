import React from "react";

import { Container, Box, Typography } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Menu, MenuItem } from '@material-ui/core';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple, yellow } from '@material-ui/core/colors';

import { makeStyles } from '@material-ui/core/styles';

import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

import { navigate } from "gatsby";

import GitHubButton from 'react-github-btn';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';

import HomeIcon from '@material-ui/icons/Home';
import MemoryIcon from '@material-ui/icons/Memory';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: yellow[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function Layout({ children }) {

  const [state, setState] = React.useState({
    drawerOpen: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, drawerOpen: open });
  };

  /*const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/language");
  };*/

  const classes = useStyles();

  //no-preference: dark; light: light; dark: dark;
  /*
  <Toolbar display="flex">
    <Box flexGrow={1}><Typography variant="h6">
      HobbyistCS
    </Typography></Box>
  </Toolbar>
  */

  const mainMenu = (menuItems) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {menuItems.map((section, index) => (
        <React.Fragment>
        <div>{index !== 0 ? <Divider /> : <div> </div>}</div>
        <List>
          {section.map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon>{grabIcon(item.icon)}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        </React.Fragment>
      ))}
    </div>
  );

  const myMenu = [
    [
      { text: "Home", icon: "HomeIcon" },
      { text: "Theory" },
      { text: "Language" },
      { text: "Platform", icon: "MemoryIcon" }
    ],
    [
      { text: "wtfwebdev" },
      { text: "other" }
    ]];

    //Note the outer bracket is curly - start jsx only at the end!
    const grabIcon = (icon) => {
      switch(icon) {
        case "HomeIcon":
          return <HomeIcon />;
        case "MemoryIcon":
          return <MemoryIcon />;
        default:
          return <></>;
      }
    }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              onClick={toggleDrawer(true)}
              color="inherit"
              aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              HobbyistCS
            </Typography>
            <GitHubButton
              href="https://github.com/"
              data-color-scheme="dark"
              data-size="large"
              aria-label="View on Github">
                View on Github
            </GitHubButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={state["drawerOpen"]} onClose={toggleDrawer(false)}>
          {mainMenu(myMenu)}
        </Drawer>
        {children}
      </Container>
    </ThemeProvider>
  );
}
