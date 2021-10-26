import React from 'react';
import { Box, Button, Container, styled, Typography } from '@material-ui/core';
import PrimaryButton from '../PrimaryButton';

const StatItem = ({ label, total }) => (
  <Box mr={2}>
    <Box component={Typography} variant="caption" color="white">
      {label}: {total}
    </Box>
  </Box>
);

const HeaderButton = styled((props) => <Button {...props} />)(({ theme }) => ({
  border: '1px solid white',
  color: 'white',
  fontWeight: 'bold',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: 'auto',
  },
}));

const HeaderDropdownButton = styled((props) => <PrimaryButton {...props} />)(
  ({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'auto',
    },
  })
);

function Header() {
  return (
    <Box bgcolor="#0c204b" color="white" py={8}>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ xs: 'flex-start', md: 'space-between' }}
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          <Box mb={{ xs: 3, md: 0 }}>
            <Box mb={2}>
              <Box
                component={Typography}
                variant="h3"
                color="white"
                fontWeight="bold !important"
              >
                Welcome back, Jasmine
              </Box>
            </Box>
            <Box component={Typography} variant="subtitle2" color="white">
              Week 4 activity summary
            </Box>
            <Box display="flex" alignItems="center">
              <StatItem label="Due this week" total={330} />
              <StatItem label="Completed" total={240} />
              <StatItem label="Overdue" total={33} />
            </Box>
          </Box>
          <Box
            width={{ xs: '100%', md: 'auto' }}
            display="flex"
            alignItems="center"
            flexDirection={{ xs: 'column', md: 'row' }}
          >
            <Box
              component={HeaderButton}
              mr={{ xs: 0, md: 2 }}
              mb={2}
              variant="outlined"
            >
              My Calendar
            </Box>
            <Box
              component={HeaderButton}
              mr={{ xs: 0, md: 2 }}
              mb={2}
              variant="outlined"
            >
              Weekly Report
            </Box>
            <Box component={HeaderDropdownButton} mr={{ xs: 0, md: 2 }} mb={2}>
              Assign
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
