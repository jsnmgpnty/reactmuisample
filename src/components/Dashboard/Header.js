import { Box, Button, Container, styled, Typography } from '@material-ui/core';
import { Help } from '@material-ui/icons';
import React from 'react';

const StatItem = ({ label, total }) => (
  <Box component={Typography} variant="caption" color="white">
    {label}: {total}
  </Box>
);

const HeaderButton = styled((props) => <Button {...props} />)(() => ({
  border: '1px solid white',
  color: 'white',
  fontWeight: 'bold',
}));

const HeaderDropdownButton = styled((props) => <Button {...props} />)(() => ({
  border: '1px solid #3a72f5',
  backgroundColor: '#3a72f5',
  color: 'white',
  fontWeight: 'bold',
}));

function Header() {
  return (
    <Box bgcolor="#0c204b" color="white" py={8}>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Box component={Typography} variant="h3" color="white">Welcome back, Jasmine</Box>
            <Box component={Typography} variant="subtitle2" color="white">Week 4 activity summary</Box>
            <Box display="flex" alignItems="center">
              <StatItem label="Due this week" total={330} />
              <StatItem label="Completed" total={240} />
              <StatItem label="Overdue" total={33} />
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Box component={HeaderButton} mr={2} variant="outlined">My Calendar</Box>
            <Box component={HeaderButton} mr={2} variant="outlined">Weekly Report</Box>
            <Box component={HeaderDropdownButton} mr={2}>Assign</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
