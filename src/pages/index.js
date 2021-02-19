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

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import ProTip from '../components/pro-tip';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { navigate } from "gatsby";

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

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Built with love by the `}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {` team.`}
    </Typography>
  );
}

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/language");
  };

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="lg">
      <AppBar position="fixed" color="transparent">
        <Toolbar display="flex">
          <Box flexGrow={1}><Typography variant="h6">
            HobbyistCS
          </Typography></Box>
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
      <Toolbar color="yellow"/>
      <Box my={4}>
        <Container style={{"minHeight": "40vh", "backgroundColor": "yellow"}}>Testing</Container>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis enim non purus volutpat tincidunt. Suspendisse iaculis est mi, sed fermentum diam faucibus eu. Praesent eget dignissim nulla. Nulla sit amet orci porttitor, pulvinar sem in, semper ipsum. Maecenas commodo, ipsum at blandit bibendum, nisi ipsum rhoncus erat, sit amet vehicula ipsum quam quis augue. Duis erat arcu, mattis id porta non, congue non elit. Praesent faucibus pretium nunc. Praesent nec velit sed mi imperdiet feugiat. Nulla elementum aliquet ex, non dapibus tellus euismod non. Praesent vel ullamcorper nisi, vitae interdum quam. Morbi ornare porttitor orci, nec finibus ex lobortis nec. Nunc at lorem lacinia, ullamcorper lectus id, consequat ipsum. Ut a commodo purus, at pharetra nisi. Donec ut mi id ante fringilla lobortis. Duis gravida, libero et ultricies vehicula, mi erat auctor sapien, sed euismod mauris ex et sapien. Nunc hendrerit non nulla sit amet dignissim.
</p><p>
Nulla nibh est, lobortis sed mattis sed, pellentesque blandit nibh. Suspendisse id tortor at eros malesuada vulputate at eu nibh. Donec nec lectus et tellus sollicitudin mattis. Aliquam non justo vehicula, tempor dolor non, porttitor felis. Ut congue, ligula eget tristique convallis, libero dui scelerisque eros, ut efficitur felis ex ac ante. Sed eget gravida massa. Cras nunc ligula, pellentesque eu nisi vitae, sollicitudin suscipit neque. Nulla egestas rhoncus nunc, id laoreet odio blandit sit amet. Aenean vel lacinia augue, ac sodales mauris. Mauris nec velit nec velit egestas lobortis. Morbi ac dolor mi.
</p><p>
Duis est neque, condimentum eget pharetra in, imperdiet non sapien. Etiam eget enim nunc. Proin sapien arcu, lacinia ut suscipit eget, interdum et leo. Etiam ex mauris, viverra in sodales eget, ultricies nec quam. Proin vel justo non ex lobortis mollis. In et varius nulla. Duis tortor sem, imperdiet at est eget, ultricies tincidunt felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vestibulum metus in sapien malesuada congue.
</p><p>
Quisque eget felis mi. Etiam elit felis, interdum a enim id, faucibus sagittis sapien. Integer vitae congue mauris. Aenean vel diam commodo, rhoncus velit ut, ullamcorper ipsum. Suspendisse faucibus tincidunt tellus, at pretium risus tempor in. Ut a ex nec ex gravida semper at at justo. Aliquam elementum sit amet erat ac gravida. Integer felis urna, sodales vitae enim eu, ullamcorper pretium velit. Phasellus venenatis augue at mi fringilla cursus. Vivamus diam nunc, pretium eget leo eu, pretium mattis ligula. Donec ut tellus dolor. Suspendisse potenti.
</p><p>
Mauris ultricies malesuada dolor, porttitor porttitor magna ultricies eget. Ut nec eleifend enim. In felis libero, imperdiet ut sagittis a, posuere vitae urna. Sed feugiat, eros ut mattis facilisis, odio sapien pulvinar felis, sed scelerisque massa dolor eget nisl. Aliquam sit amet magna enim. Fusce non mauris leo. Fusce vehicula egestas molestie. Sed vitae ex rutrum, malesuada orci quis, tristique felis. Nulla in turpis ligula. Vestibulum placerat massa felis, vel porttitor sapien tincidunt sed. Vestibulum condimentum bibendum mattis. Aliquam ipsum urna, dictum volutpat fermentum ornare, tempus nec enim. Aenean efficitur orci nec commodo venenatis. Duis commodo odio libero, ac convallis augue dignissim sed.
</p><p>
Curabitur diam mi, mattis quis accumsan et, sodales et nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent tempor urna at congue porta. Donec vehicula gravida viverra. Suspendisse viverra urna sem, placerat ornare purus porta id. Nunc tristique sit amet ante et consectetur. Proin felis nunc, vestibulum ut luctus in, pharetra in sapien. Duis viverra laoreet tortor et venenatis. Suspendisse potenti. Mauris tristique, lectus eget suscipit maximus, lectus purus ornare nisi, sed aliquet ante dui vel nibh. In enim dui, ullamcorper vitae massa eget, convallis dignissim turpis. Quisque quis cursus mi. Aliquam interdum laoreet porta. Aenean elementum cursus felis ut commodo. Aenean rhoncus dui mauris, id vehicula augue accumsan et. Proin in nunc non diam commodo placerat non et leo.
</p><p>
Maecenas fringilla eros non velit tristique, at tempor sapien vehicula. Etiam faucibus fringilla nunc at posuere. Nulla libero metus, tristique at odio ac, egestas vulputate ipsum. Pellentesque eget porttitor orci. Mauris vel metus et elit pretium efficitur a sed diam. Donec luctus faucibus dui non volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        </p>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <TopicCard image={data["sec_img_theory"]} title={"Theory"} color={"red"} dest={"/theory"}>
              Gaining insights into the universal laws of computing.
              <ul>
                <li>Data Structure and Algorithm</li>
                <li>Theoretical Computer Science</li>
              </ul>
            </TopicCard>
          </Grid>
          <Grid item lg={4}>
            <TopicCard image={data["sec_img_lang"]} title={"Language"} color={"green"} dest={"/language"}>
              Learn programming languages more thoroughly by studying from first principles.
              <ul>
                <li>Programming Language Theory</li>
                <li>Compilers and Interpreters</li>
              </ul>
            </TopicCard>
          </Grid>
          <Grid item lg={4}>
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
        <ProTip />
        <MadeWithLove />
      </Box>
    </Container>
    </ThemeProvider>
  );
}
