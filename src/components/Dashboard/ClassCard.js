import React from 'react';
import { Box, Card, Divider, Typography } from '@material-ui/core';
import { Star } from '@material-ui/icons';

// This component is just 🤮

const CATEGORY_STYLE = {
  blue: {
    bg: 'linear-gradient(180deg, rgba(68, 81, 255, 0.25) 0%, rgba(68, 81, 255, 0) 40%)',
    color: 'rgba(68, 81, 255, 1)',
  },
  green: {
    bg: 'linear-gradient(180deg, rgba(145, 213, 94, 0.25) 0%, rgba(145, 213, 94, 0) 40%)',
    color: 'rgba(145, 213, 94, 1)',
  },
  yellow: {
    bg: 'linear-gradient(180deg, rgba(250, 194, 97, 0.25) 0%, rgba(250, 194, 97, 0) 40%)',
    color: 'rgba(250, 194, 97, 1)',
  },
  pink: {
    bg: 'linear-gradient(180deg, rgba(214, 119, 174, 0.25) 0%, rgba(214, 119, 174, 0) 40%)',
    color: 'rgba(214, 119, 174, 1)',
  },
  purple: {
    bg: 'linear-gradient(180deg, rgba(149, 121, 225, 0.25) 0%, rgba(149, 121, 225, 0) 40%)',
    color: 'rgba(149, 121, 225, 1)',
  },
};

const ClassCardBadge = ({ total }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    width={24}
    height={24}
    borderRadius={4}
    bgcolor="#eceef2"
  >
    {total}
  </Box>
);

const ClassCardLink = ({ label, total, ...props }) => (
  <Box
    my={2}
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    {...props}
  >
    <Typography variant="body1">{label}</Typography>
    {!!total && <ClassCardBadge total={total} />}
  </Box>
);

const ClassHeaderSubItem = ({ children, ...props }) => (
  <Box pr={1} mr={1} borderRight="1px solid #eceef2" {...props}>
    {children}
  </Box>
);

const ClassCard = ({
  subject,
  year,
  category,
  activitiesDue = 0,
  isFavorite,
  style = 'blue',
  ...props
}) => (
  <Box
    component={Card}
    p={2}
    sx={{ background: CATEGORY_STYLE[style].bg }}
    borderTop={`5px solid ${CATEGORY_STYLE[style].color}`}
    {...props}
  >
    <Box mb={2}>
      <Box
        component={Typography}
        variant="h5"
        sx={{ fontWeight: 'bold !important' }}
      >
        {subject}
      </Box>
    </Box>
    <Box display="flex" alignItems="center">
      {isFavorite && (
        <ClassHeaderSubItem>
          <Star style={{ fill: '#5e8cf6' }} />
        </ClassHeaderSubItem>
      )}
      {year && (
        <ClassHeaderSubItem width={70}>
          <Typography variant="body2">Year: {year}</Typography>
        </ClassHeaderSubItem>
      )}
      {category && (
        <ClassHeaderSubItem width={120}>
          <Box
            component={Typography}
            variant="body2"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {category}
          </Box>
        </ClassHeaderSubItem>
      )}
    </Box>
    <ClassCardLink label="Activities due this week" total={activitiesDue} />
    <ClassCardLink label="Assign Activities" />
    <ClassCardLink label="Class calendar" />
    <Divider />
    <ClassCardLink label="Add student" mb={0} />
  </Box>
);

export default ClassCard;
