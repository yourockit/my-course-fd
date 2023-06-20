import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ScopedCssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/my-course-fd">
      <ScopedCssBaseline>
        <App />
      </ScopedCssBaseline>
    </BrowserRouter>
  </React.StrictMode>
);
