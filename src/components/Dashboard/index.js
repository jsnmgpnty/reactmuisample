import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import HelpCard from '../HelpCard';
import NewPortalTourCard from '../NewPortalTourCard';
import ClassCard from './ClassCard';
import Header from './Header';

const CLASSES = [
  {
    subject: '12ENGA',
    year: 12,
    category: 'English',
    activitiesDue: 3,
    isFavorite: true,
    style: 'green',
  },
  {
    subject: '12ENGB',
    year: 12,
    category: 'English',
    activitiesDue: 0,
    isFavorite: true,
    style: 'blue',
  },
  {
    subject: '08MATHS',
    year: 8,
    category: 'Maths',
    activitiesDue: 3,
    isFavorite: true,
    style: 'yellow',
  },
  {
    subject: '09SCI',
    year: 9,
    category: 'Science',
    activitiesDue: 6,
    isFavorite: true,
    style: 'pink',
  },
  {
    subject: '09HASS',
    year: 9,
    category: 'Humanities and Social Studies',
    activitiesDue: 1,
    isFavorite: true,
    style: 'purple',
  },
];

const PlaceholderClassCard = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    width="100%"
    height={282}
    border="3px dashed #adb2b8"
  >
    <Box
      component={Typography}
      variant="h1"
      sx={{ color: '#adb2b8', marginTop: 0 }}
    >
      +
    </Box>
  </Box>
);

const Dashboard = () => (
  <>
    <Header />
    <Container>
      <Box my={6}>
        <Box mb={1}>
          <Typography variant="h5">Here are your classes</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle2">
            Select a class to view this week's assigned activities and begin
            your lesson
          </Typography>
          <Typography variant="subtitle2">View all classes</Typography>
        </Box>
      </Box>
      <Grid container spacing={4}>
        <Grid item md={9}>
          <Box mb={6} display="flex" flexWrap="wrap">
            <Grid container spacing={4}>
              {CLASSES.map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <ClassCard mb={2} {...item} />
                </Grid>
              ))}
              <Grid item xs={12} sm={6} md={4}>
                <PlaceholderClassCard />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={3}>
          <NewPortalTourCard mb={2} />
          <HelpCard />
        </Grid>
      </Grid>
    </Container>
  </>
);

export default Dashboard;
