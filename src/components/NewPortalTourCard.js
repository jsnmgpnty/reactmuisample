import React from 'react';
import { Box, Card, Typography } from '@material-ui/core';
import PrimaryButton from './PrimaryButton';

const NewPortalTourCard = (props) => (
  <Box
    component={Card}
    height={360}
    p={2}
    bgcolor="#d2dffd"
    {...props}
    display="flex"
    flexDirection="column"
    justifyContent="flex-end"
  >
    <Box mb={2}>
      <Box component={Typography} variant="h6" fontWeight="bold !important">
        Explore your new portal
      </Box>
    </Box>
    <Box mb={3}>
      <Typography variant="body1">
        Improved class focus, unit plans, live lessons, additional tracking
        features and much more.
      </Typography>
    </Box>
    <Box component={PrimaryButton} mb={3} fullWidth>
      See how it works
    </Box>
    <Box
      component="a"
      href="/"
      color="#3a72f5"
      display="block"
      width="100%"
      textAlign="center"
      mb={2}
    >
      Getting started guide
    </Box>
  </Box>
);

export default NewPortalTourCard;
