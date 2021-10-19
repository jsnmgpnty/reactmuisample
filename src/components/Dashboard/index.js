import { Box, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import ClassCard from './ClassCard';
import Header from './Header'

const CLASSES = [
  {
    subject: '12ENGA',
    year: 12,
    category: 'English',
    activitiesDue: 3,
    isFavorite: true,
  },
  {
    subject: '12ENGB',
    year: 12,
    category: 'English',
    activitiesDue: 0,
    isFavorite: true,
  },
  {
    subject: '08MATHS',
    year: 8,
    category: 'Maths',
    activitiesDue: 3,
    isFavorite: true,
  },
  {
    subject: '09SCI',
    year: 9,
    category: 'Science',
    activitiesDue: 6,
    isFavorite: true,
  },
  {
    subject: '09HASS',
    year: 9,
    category: 'Humanities and Social Studies',
    activitiesDue: 1,
    isFavorite: true,
  },
];

function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Box my={6}>
          <Typography variant="h5">Here are your classes</Typography>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle2">Select a class to view this week's assigned activities and begin your lesson</Typography>
            <Typography variant="subtitle2">View all classes</Typography>
          </Box>
        </Box>
        <Grid container>
          <Grid item md={9}>
            <Box my={6} display="flex" flexWrap="wrap">
              {CLASSES.map((item, i) => (
                <ClassCard
                  key={i}
                  mr={4}
                  mb={4}
                  {...item}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Dashboard
