import { Box, Typography } from '@material-ui/core';
import { Help } from '@material-ui/icons';
import React from 'react';

const LINKS = [
  { label: 'Home', url: '' },
  { label: 'Classes', url: '' },
  { label: 'Planner', url: '' },
  { label: 'School Data', url: '' },
  { label: 'Library', url: '' },
]

function Navbar() {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" bgcolor="#0f2551" color="white" p={2}>
      <Box display="flex" alignItems="center" >
        <Box
          component="img"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt=""
          mr={2}
          p={1}
          width={120}
          borderRight="1px solid white"
        />
        {LINKS.map((link, i) => (
          <Box
            component="a"
            href={link.url}
            key={i}
            mr={2}
          >
            <Box
              variant="h5"
              color="white"
              component={Typography}
            >
              {link.label}
            </Box>
          </Box>
        ))}
      </Box>
      <Box display="flex" alignItems="center">
        <Box component={Help} mr={2} />
        <Box display="flex">
          <Box mr={2}>
            <Typography variant="body1">
              Jasmine Flynn
            </Typography>
            <Typography variant="body2">
              Teacher Account
            </Typography>
          </Box>
          <Box
            bgcolor="#8869f1"
            color="white"
            borderRadius={6}
            p={1}
            fontWeight="bold"
            fontSize={20}
          >
            JF
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar;
