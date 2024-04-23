import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { StrictMode } from "react";
import reportWebVitals from './reportWebVitals';
import { theme } from './core/theme';
import { SnackbarProvider } from 'notistack';
import { Router } from './routes';
import { StoreProvider } from "./core/store";

const root = ReactDOM.createRoot(document.getElementById('root'));


// JSX javascript XML
root.render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline />
        <StoreProvider>
          <Router />
        </StoreProvider>
      </SnackbarProvider>
    </CssVarsProvider>
  </StrictMode>
);


reportWebVitals();
