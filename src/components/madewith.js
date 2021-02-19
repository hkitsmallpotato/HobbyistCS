import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { Typography } from '@material-ui/core';

export default function MadeWith() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
      {`Built with love by the `}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {` team.`}
    </Typography>
  );
}
