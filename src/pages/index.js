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
    sec_img_resource: file(relativePath: { eq: "library-1147815_1280.jpg" }) {
      ...sectionImage
    }
    sec_img_topic: file(relativePath: { eq: "control-center-1054460_1920.jpg" }) {
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
        <Typography variant="h2">
          Welcome!
        </Typography>
        <Alert severity="warning">
          <AlertTitle>Site Under Construction</AlertTitle>
          We are still working on it, so expect rought edges and empty sections.
        </Alert>
        <Typography variant="body1">
          Welcome to Hobbyist CS! This site is a simultaneously light and serious take on basic CS, skidding the boundary between the world of academia and the world of practitioners.
        </Typography>
        <Typography variant="body1">
        Are you:
        <ul>
        <li>Someone who wants to become a software engineer, or are learning to become one, but find yourself getting stuck because you don't have enough CS background?</li>
        <li>Someone who did a CS undergrad, but find the basics too boring, or too technical/dry, and can't see how that's relevant to the daily grind of a typical software engineering job?</li>
        <li>Moreover, you don't see the big picture - how everything fits together (oh no, you slept through *that* special lecture where the professor told you exactly that &gt;_&lt;)</li>
        </ul>
        </Typography>
        <Typography variant="h4">
          Why CS?
        </Typography>
        <Typography variant="h4">
          The technology stack
        </Typography>
        <Typography variant="h4">
          CS is a living subject
        </Typography>
        <Typography variant="h3">
          Sections
        </Typography>
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
          <Grid item sm={12} md={6} lg={4}>
            <TopicCard image={data["sec_img_resource"]} title={"General Resources"} color={"grey"} dest={"/general"}>
              A bunch of generally useful links.
            </TopicCard>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <TopicCard image={data["sec_img_topic"]} title={"Other Topics"} color={"purple"} dest={"/othertopics"}>
              Topics that are usually taught after the core/foundation is done, as well as misc. topics.
            </TopicCard>
          </Grid>
        </Grid>
        <Typography variant="h3">
          Overview
        </Typography>
        <Typography variant="body1">
        As we've mentioned in Introduction, the primary objective of a CS education is to teach enough stuff so that one understand how a computer works in a big picture manner - but with enough details that you can work effectively with parts that goes wrong to fix it. And by big picture, we mean grokking the whole thing end-to-end or in other words, to grasp the whole stack. (There are other, higher objectives, but let's ignore that for now.)
        </Typography>

        <Typography variant="body1">
        Although the exact stacks will differ depending on which field in CS you end up working in, any computer programs are going to run on a "base stack" that is more or less stable - and this is what the "Core" subjects are all about.
        </Typography>

        <Typography variant="body1">
        When you run a program on a Personal Computer [1], a lots happen - made possible by the collective efforts of generations of engineering:
        </Typography>

        <Typography variant="body1">
        <ul>
        <li>The program is normally written in specially designed, artificial languages called Programming Language, that are understandable by Human - and that human can work with manually. Unfortunately, computer only run a special kind of code that is in a different language (Let's call it machine code for now). How do we design the languages? And how do we bridge this gap between the human world and the computer world? This is what the Language section address.</li>
        <li>Even if we understand how the language works, at the end of the day, the machine code still need to get physically executed. How does that happen? Moreover, in our scenario, we probably manually triggered the program from within the Operating System (OS) our computer is running. What is the role that the OS play? It turns out that there is an intricate dance between the hardware and the OS to present (the illusion of) a relatively nice platform upon which our program runs. This is what the Platform section is all about.</li>
        <li>And finally, permeating all of these are the ideas and thinkings - the brain behind CS. Why is the tech stack arranged in this way? Are there universal principles that affects how computing works, and what lessons can we extract from it? As we will see, Theoretical Computer Science will both answer these questions, and indeed provide the philosophy underlying the design of modern computer. Moreover, Algorithm and Data Structure are both subjects that tell us how to write program in such a way that it will run efficiently and produce correct result. [2] Together, these subjects constitute the Theory part.</li>
        </ul>
        </Typography>

        <Typography variant="body1">
        A minor note. A common classification scheme is to split computing into Software and Hardware. A simple way to put it is that Hardware is the physical thing that you can, in theory, touch - Software is the abstract stuff that happen. If we apply that scheme here, then all of Theory and Language and Operating System in Platform count as Software; Computer Architecture and Digital Circuits are Hardware.
        </Typography>
      </Box>
    </Layout>
  );
}
