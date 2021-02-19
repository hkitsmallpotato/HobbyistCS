import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { Container, Box, Typography } from '@material-ui/core';

//import IconButton from '@material-ui/core/IconButton';
//import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
//import PlayArrowIcon from '@material-ui/icons/PlayArrow';
//import SkipNextIcon from '@material-ui/icons/SkipNext';


import Layout from '../components/layout';
import PageNavigation from '../components/pagenavigation';
import LinkPreview from '../components/linkpreview';

/*const useStyles = makeStyles((theme) => ({
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));*/

/*
<div className={classes.controls}>
  <IconButton aria-label="previous">
    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
  </IconButton>
  <IconButton aria-label="play/pause">
    <PlayArrowIcon className={classes.playIcon} />
  </IconButton>
  <IconButton aria-label="next">
    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
  </IconButton>
</div>
*/


export default function App() {
  return (

    <Layout>
      <PageNavigation prev="Theory" prevLink="/theory" next="Platform" nextLink="/platform">
      <h1>Testing</h1>
      <Box my={4}>
        <p>Lorem Ipsum ... <Link to="/">Go to the main page</Link></p>
        <h2>Programming Language Theory (PLT)</h2>
        <p>Programming Languages are <em>formal languages</em> that are designed to be automatically executed by computer. It is due to the automatic execution requirement that the language have to be formal, that is, precisely, unambiguously and rigorously defined that it is amenable to algorithmic processing.</p>

        <p>Normal people used to nature human language may find formal language alien - because ambiguity is a natural part of nature language - we are used to it.</p>

        <p>Over time, a family of techniques are developed to help model these formal language, to define them, to analyze them etc - in short, they provide a toolbox and a conceptual framework to help us understand them.</p>

        <h3>Semantics and the Big Three Paradigm</h3>
        <p>The <em>Big Three</em> Paradigm in Programmings are:</p>
        <ul>
          <li>Imperative Style</li>
          <li>Object Oriented Style</li>
          <li>Functional Style</li>
        </ul>
        <p>The resources selected below are some of the best the author have seen that provide a sound theoretical foundation for building compiler/interpreters later. For Functional Style, the MPRI course goes beyond the basic semantic modelling of lambda calculus and <em>proves</em> the logical soundness of common pattern used in practical implementation. It relies on techniques such as structural induction and case analysis, comparison/bisimulation, transitive closure and defining new relations, etc. What is perhaps more surprising, and less well known, is that even the nebulous object oriented style can be rigorously modelled as well. This is done in The "Theory of Classification". A Key Theme in the series is that class is not the same as a type - instead it is more appropriately viewed as implicitly denoting a family of types. Indeed, traditionally class based inheritance has presented a challenge not entirely dissimilar to those presented by the notion of mutable variable and assignment in imperative style, as they do not fit well with the native constructs in pure math, which are our main meta-language for modelling.</p>

        <LinkPreview title="A Practitioners Guide to Reading Programming Languages Papers"
          url="https://blog.acolyer.org/2018/01/26/a-practitioners-guide-to-reading-programming-languages-papers/"/>
        <LinkPreview title="MPRI course 2-4: Functional programming and type systems"
          url="https://xavierleroy.org/mpri/2-4/"/>
        <LinkPreview title="The Theory of Classification (Part 1-20), Journal of Object Technology"
          url="http://staffwww.dcs.shef.ac.uk/people/A.Simons/classify/"/>

        <h3>Special Constructs</h3>
        <p>Some Programming Languages have special programming construct that merits attention. Moreover, recent trends in computing stimulated the development of new constructs. We give some examples below.</p>

        <p>It turns out that class based OO is not the only way to do OO. There are in fact many methods and variations: prototype-based method in Javascript, multiple inheritance and mixin, such as the CLOS(Common Lisp Object System), native, message passing implementation such as in Smalltalk, etc.</p>
        <p>Smalltalk is an old programming language, but it is arguably the one that have stayed closer to the original spirit and vision of OO as envisioned by Alan Kay. An especially note-worthy feature (and one that may cause discomfort to some), is that in that language everything is an object, including the notion of class itself. Also, everything is done by message passing, even things that are usually regarded as core language feature such as looping, conditional, etc. The link below gives a review of these concepts, and most importantly illustrates how the object system can be bootstrapped from the <em>meta-class</em>.</p>
        <p>Concurrent and Parallel Programming has existed since the beginning, and it is well known that they are significantly harder than classical imperative programming because of <em>race condition</em> - more fundamentally, the arbitrary nature of the intertwining of execution order (unless restricted by synchronisation) implies that there could potentially be exponentially many possible combinations. Nevertheless, the end of the Moore's Law in recent years have shifted method to accelerate computation by relying on parallelism, starting from multi-core at the hardware level. This development increased the importance of these constructs, and effectively designed constructs can increase mainstream adoption by programmers by making it less painful and error-prone to use.</p>
        <p>As an example, Futures and Promises are two of the simplest concurrency construct there could be that provide a thin abstraction for developer. However, even with them there is a lots of subtlety once you dig beyond the surface. The chapter below is a very erudite expositions that clarify these fine prints, by situating them within the rich history associated with those concepts.</p>

        <LinkPreview title="The Smalltalk object Model"
          url="http://pharo.gforge.inria.fr/PBE1/PBE1ch6.html"/>

        <LinkPreview title="Futures and Promises"
          url="http://dist-prog-book.com/chapter/2/futures.html"/>

        <h2>Compilers and Interpreters</h2>
        <p>Compilers and Interpreters are different ways to make a program written in programming language - that is not directly executable by computer - executable. Compiler does so by translating it into the equivalent machine code. Interpreters does so in an online manner, by directly emulating the effect of executing that program according to its formal spec. A key insight is that Compilers and Interpreters are themselves computer program.</p>

        <p>Over time, people have accumulated a body of knowledge on how to effectively write these class of programs.</p>

        <LinkPreview title="Writing an Interpreter, CESK Style"
          url="http://matt.might.net/articles/cesk-machines/" />
        <LinkPreview title="The Racket Manifesto"
          url="https://felleisen.org/matthias/manifesto/"/>
        <LinkPreview title="What's up with Monomorphism?"
          url="https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html"/>
        <LinkPreview title="Collasping Tower of Interpreters"
          url="https://www.cs.purdue.edu/homes/rompf/papers/amin-popl18.pdf"/>
        <LinkPreview title="Compiling Pattern Matching to good Decision Trees"
          url="https://www.cs.tufts.edu/~nr/cs257/archive/luc-maranget/jun08.pdf"/>
        <LinkPreview title="Writing Hygienic Macros in Scheme with Syntax-Case"
          url="https://legacy.cs.indiana.edu/~dyb/pubs/tr356.pdf"/>
        <LinkPreview title="The Nanopass Framework"
          url="https://nanopass.org/documentation.html"/>

      </Box>
      </PageNavigation>
    </Layout>
  );
}
