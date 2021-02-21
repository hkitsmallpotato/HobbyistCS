import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { Container, Box, Typography } from '@material-ui/core';
import Img from "gatsby-image";
import { graphql } from "gatsby";

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import BackgroundImage from 'gatsby-background-image';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

//import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
//import ListItemIcon from '@material-ui/core/ListItemIcon';

import { navigate } from "gatsby";

import Layout from '../components/layout';

import { Alert, AlertTitle } from '@material-ui/lab';


export const sectionImage = graphql`
  fragment sectionImage on File {
    childImageSharp {
      fluid(maxWidth: 300, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    sec_img_theory: file(relativePath: { eq: "algo-tcs-custom.png" }) {
      ...sectionImage
    }
    sec_img_lang: file(relativePath: { eq: "markus-spiske-cvBBO4PzWPg-unsplash.jpg" }) {
      ...sectionImage
    }
    sec_img_platform: file(relativePath: { eq: "computer-electronics-velka.jpg" }) {
      ...sectionImage
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

/*
 *
 * imgStyle={{
     background: "linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1)) center center",
     "background-size": "cover", }}
 */
function TopicCard(props) {
  const backgroundFluidImageStack =
    [props.image.childImageSharp.fluid,
    `linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1))`].reverse();
  return (
    <Card>
      <CardActionArea onClick={() => { navigate(props.dest); }}>
        <CardMedia>
          <BackgroundImage id={`testimgfade`} fluid={backgroundFluidImageStack} alt="" />
        </CardMedia>
        <CardContent style={{"borderTopWidth": "5px", "borderTopColor": props.color, "borderTopStyle": "solid"}}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.children}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

/*
<Typography variant="h4" component="h1" gutterBottom>
  gatsby-theme-material-ui example
</Typography>
<Link to="/about" color="secondary">
  Go to the about page
</Link>
<h1>About {data.site.siteMetadata.title}</h1>
*/

/*
<Popover
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
>
*/


export default function App({ data }) {

  //const [anchorEl, setAnchorEl] = React.useState(null);

  /*const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/language");
  };*/

  return (
    <Layout>
      <Toolbar color="yellow"/>
      <Box my={4}>
        <Alert severity="warning">
          <AlertTitle>Site Under Construction</AlertTitle>
          We are still working on it, so expect rought edges and empty sections.
        </Alert>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} lg={4}>
            <TopicCard image={data["sec_img_theory"]} title={"Theory"} color={"red"} dest={"/theory"}>
              Gaining insights into the universal laws of computing.
              <ul>
                <li>Data Structure and Algorithm</li>
                <li>Theoretical Computer Science</li>
              </ul>
            </TopicCard>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <TopicCard image={data["sec_img_lang"]} title={"Language"} color={"green"} dest={"/language"}>
              Learn programming languages more thoroughly by studying from first principles.
              <ul>
                <li>Programming Language Theory</li>
                <li>Compilers and Interpreters</li>
              </ul>
            </TopicCard>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <TopicCard image={data["sec_img_platform"]} title={"Platform"} color={"blue"} dest={"/platform"}>
              Peeling back the abstractions to reveal the low level details of how a computer works.
              <ul>
                <li>Digital Circuit</li>
                <li>Computer Organization and Design</li>
                <li>Operating System</li>
              </ul>
            </TopicCard>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
