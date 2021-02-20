import React from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

import { Link } from 'gatsby-theme-material-ui';

import IconButton from '@material-ui/core/IconButton';

import { List, ListItem, ListItemText } from '@material-ui/core';

import { navigate } from "gatsby";

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

export default function PageNavigation({ children, next, nextLink, prev, prevLink }) {
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
        <Grid item xs={12} sm={5} md={4}>
          <Paper className={classes.paper}>
            <List className={classes.nopad}>
              <ListItem button onClick={(event) => { navigate(prevLink); }}>
                <ListItemText primary="Previous" secondary={prev} />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={0} sm={2} md={4}>
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Paper className={classes.paper}>
            <List className={classes.nopad}>
              <ListItem button onClick={(event) => { navigate(nextLink); }}>
                <ListItemText align="right" primary="Next" secondary={next} />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
