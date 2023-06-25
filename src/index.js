import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ScopedCssBaseline, ThemeProvider, createTheme } from '@mui/material';

const myTheme = createTheme({
  palette: {
    primary: {
      main: '#373737',
    },
    background: {
      default: '#f7eee5',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/my-course-fd">
      <ThemeProvider theme={myTheme}>
        <ScopedCssBaseline>
          <App />
        </ScopedCssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
