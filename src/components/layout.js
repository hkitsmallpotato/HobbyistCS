import React from "react";

import { Container, Box, Typography } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Menu, MenuItem } from '@material-ui/core';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

import { navigate } from "gatsby";

import GitHubButton from 'react-github-btn';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function Layout({ children }) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/language");
  };

  //no-preference: dark; light: light; dark: dark;

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <AppBar position="fixed" color="transparent">
          <Toolbar display="flex">
            <Box flexGrow={1}><Typography variant="h6">
              HobbyistCS
            </Typography></Box>
            <GitHubButton
              href="https://github.com/"
              data-color-scheme="dark"
              data-size="large"
              aria-label="View on Github">
                View on Github
            </GitHubButton>
            <Button color="inherit" onMouseOver={handleClick}>
              { Boolean(anchorEl) ? <ExpandMoreRoundedIcon /> : <ChevronRightRoundedIcon />}General
            </Button>
            <Button color="inherit">
              <ChevronRightRoundedIcon />Sections
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{"vertical":"bottom", "horizontal":"left"}}
              transformOrigin={{"vertical":"top", "horizontal":"left"}}
              getContentAnchorEl={null}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem onClick={handleClose}><ChevronRightRoundedIcon />Theory</MenuItem>
              <MenuItem onClick={handleClose}><ChevronRightRoundedIcon />Language</MenuItem>
              <MenuItem onClick={handleClose}><ChevronRightRoundedIcon />Platform</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        {children}
      </Container>
    </ThemeProvider>
  );
}
