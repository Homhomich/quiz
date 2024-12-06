import React, { StrictMode } from 'react';
import { RouterProvider } from 'react-router';

import router from './router';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { CssBaseline } from '@mui/material';

const App: React.FC = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);

export default App;
