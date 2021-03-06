import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { Typography, Box } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';

import { useStaticQuery, graphql } from "gatsby";

import { makeStyles } from '@material-ui/core/styles';
import Img from "gatsby-image";

const useStyles = makeStyles({
  mycontainer: {
    height: '6rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default function MadeWith() {

  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query CreditQuery {
      site {
        siteMetadata {
          author
          authorprofile
        }
      }
      img_hosting: file(relativePath: { eq: "FleekForLight.png" }) {
        childImageSharp {
          fixed(width: 58, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const thisYear = new Date().getFullYear();

  return (
    <Typography variant="body2" color="textSecondary" align="center" gutterBottom
      component="div" className={classes.mycontainer}>
      <Box>
        Hosted on <Link href="https://fleek.co/hosting/"><Img fixed={data.img_hosting.childImageSharp.fixed} /></Link>.
        If you like what I did, consider
        <a href="https://www.buymeacoffee.com/lemonteahk" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{height: "30px", width: "109px"}} /></a>
      </Box>
      <Box>
        Built with <FavoriteIcon /> by
        <Link color="inherit" href={data.site.siteMetadata.authorprofile}>
          <GitHubIcon /> {data.site.siteMetadata.author}
        </Link> in Hong Kong, {thisYear}.
      </Box>
    </Typography>
  );
}
