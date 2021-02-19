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
}));

export default function Layout({ children }) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/language");
  };

  const classes = useStyles();

  //no-preference: dark; light: light; dark: dark;
  /*
  <Toolbar display="flex">
    <Box flexGrow={1}><Typography variant="h6">
      HobbyistCS
    </Typography></Box>
  </Toolbar>
  */

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
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
        {children}
      </Container>
    </ThemeProvider>
  );
}
