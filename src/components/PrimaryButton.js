import React from 'react';
import { Button, styled, darken } from '@material-ui/core';

const PrimaryButton = styled(({ fullWidth: _, ...props }) => (
  <Button {...props} />
))(({ fullWidth }) => ({
  border: '1px solid #3a72f5',
  backgroundColor: '#3a72f5',
  color: 'white',
  fontWeight: 'bold',
  width: fullWidth ? '100%' : 'auto',
  '&:hover': {
    backgroundColor: darken('#3a72f5', 0.05),
  },
}));

export default PrimaryButton;
