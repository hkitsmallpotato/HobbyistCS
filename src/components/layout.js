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
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';

import HomeIcon from '@material-ui/icons/Home';
import FunctionsIcon from '@material-ui/icons/Functions';
import ChatIcon from '@material-ui/icons/Chat';
import MemoryIcon from '@material-ui/icons/Memory';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { Link } from 'gatsby-theme-material-ui';

import MadeWith from './madewith';

import { useStaticQuery, graphql } from "gatsby"


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

  subt: {
    "margin-left": "10px",
    "margin-top": "5px"
  }
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
  //<Typography variant="h6" className={classes.subt}>{section.subtitle}</Typography>

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
        <div>{section.hasOwnProperty("subtitle") ?
          <ListSubheader>{section.subtitle}</ListSubheader> :
          <div> </div>}</div>
        <List>
          {section.content.map((item) => {
            //The open bracket must be on the same line as return to
            //trigger jsx detection correctly
            switch(item.type) {
              case "external_url":
                return (
                  <ListItem key={item.text}>
                    <Link color="secondary" target="_blank" rel="noopener noreferrer"
                      href={item.link}><OpenInNewIcon /> {item.text}</Link>
                  </ListItem>);
              default:
                return (
                  <ListItem button key={item.text} onClick={(event) => {navigate(item.link);} }>
                    <ListItemIcon>{grabIcon(item.icon)}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>);
            }
          })}
        </List>
        </React.Fragment>
      ))}
    </div>
  );

  const menuData = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          title
          menu {
            icon
            link
            text
          }
          linkedsites {
            link
            text
            type
          }
          githubrepo
        }
      }
    }
  `);

  const myMenu = [
    {
      content: menuData.site.siteMetadata.menu
    },
    {
      subtitle: "Other Sites",
      content: menuData.site.siteMetadata.linkedsites
    }
  ];

    //Note the outer bracket is curly - start jsx only at the end!
    const grabIcon = (icon) => {
      switch(icon) {
        case "HomeIcon":
          return <HomeIcon />;
        case "FunctionsIcon":
          return <FunctionsIcon />;
        case "ChatIcon":
          return <ChatIcon />;
        case "MemoryIcon":
          return <MemoryIcon />;
        case "CollectionsBookmarkIcon":
          return <CollectionsBookmarkIcon />;
        case "BubbleChartIcon":
          return <BubbleChartIcon />;
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
              {menuData.site.siteMetadata.title}
            </Typography>
            <GitHubButton
              href={menuData.site.siteMetadata.githubrepo}
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
        <footer>
          <MadeWith />
        </footer>
      </Container>
    </ThemeProvider>
  );
}
