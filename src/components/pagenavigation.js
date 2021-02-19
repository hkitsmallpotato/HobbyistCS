import React from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

import { Link } from 'gatsby-theme-material-ui';

import IconButton from '@material-ui/core/IconButton';

import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  nopad: {
    padding: '0 0 0 0'
  }
}));
//padding: theme.spacing(2),

export default function PageNavigation({ children }) {
  const classes = useStyles();

  return (
    <Container>

      <Grid container spacing={3}>
        <Grid item xs={12}>
        <IconButton><ArrowBackIcon /></IconButton>
            <Link>Home</Link>
        </Grid>
        <Grid item xs={12}>
          { children }
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <List className={classes.nopad}>
              <ListItem button>
                <ListItemText primary="Previous" secondary="Theory" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <List className={classes.nopad}>
              <ListItem button>
                <ListItemText align="right" primary="Next" secondary="Platform" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
