import React from "react";

import { Typography } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import LinkIcon from '@material-ui/icons/Link';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import Img from 'gatsby-image';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
}));

export default function LinkPreview(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover}>
        <Img fluid={props.img} />
      </CardMedia>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle2">
            <a href={props.url} target="_blank" rel="noopener noreferrer"><LinkIcon fontSize="small" /> {props.url}</a>
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {props.description ? props.description : ""}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
