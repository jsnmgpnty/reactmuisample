import React from 'react';
import { Box, Card, Divider, Typography } from '@material-ui/core';
import { Help, ArrowForward } from '@material-ui/icons';

const HelpItem = ({ label, ...props }) => (
  <Box display="flex" alignItems="center" px={2} mb={2} {...props}>
    <Box component={ArrowForward} mr={2} />
    <Typography variant="body">{label}</Typography>
  </Box>
);

const HelpCard = (props) => (
  <Box component={Card} py={2} {...props}>
    <Box p={2} mb={2} display="flex" alignItems="center">
      <Box component={Help} mr={2} />
      <Box
        component={Typography}
        variant="h6"
        sx={{ fontWeight: 'bold !important' }}
      >
        Help & support
      </Box>
    </Box>
    <HelpItem label="Visit help centre" />
    <HelpItem label="Send us your feedback" />
    <HelpItem label="Make a request or suggestion" />
    <HelpItem label="Report an issue" />
    <Divider />
    <HelpItem label="Teacher support group" mt={2} />
    <HelpItem label="Schedule a consultation" mb={0} />
  </Box>
);

export default HelpCard;
