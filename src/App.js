import React from 'react';
import { Box, createTheme, ThemeProvider } from '@material-ui/core';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="#f8f9fc">
        <Navbar />
        <Dashboard />
      </Box>
    </ThemeProvider>
  );
}

export default App;
