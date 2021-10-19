import { Box, Card, Divider, Typography } from '@material-ui/core'
import { Star } from '@material-ui/icons'
import React from 'react'

const ClassCard = ({ subject, year, category, activitiesDue = 0, isFavorite, ...props }) => (
  <Box component={Card} width={300} p={6} {...props}>
    <Typography variant="h6">{subject}</Typography>
    <Box display="flex" alignItems="center">
      {isFavorite && <Star />}
      {year && <Typography variant="body2">Year: {year}</Typography>}
      {category && <Typography variant="body2">{category}</Typography>}
    </Box>
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography variant="body1">Activities due this week</Typography>
      <Box p={1} borderRadius={4} bgcolor="gray">{activitiesDue}</Box>
    </Box>
    <Typography variant="body1">Assign Activites</Typography>
    <Typography variant="body1">Class calendar</Typography>
    <Divider />
    <Typography variant="body2">Add student</Typography>
  </Box>
);

export default ClassCard;
