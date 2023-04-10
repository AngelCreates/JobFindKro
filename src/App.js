import React from 'react';
import { Box, Grid } from '@mui/material';
import { ThemeProvider } from "@mui/material";
import './App.css';
import theme from './components/theme/theme';
import Header from "./components/Header/"
import SearchBar from './components/SearchBar';

export default () => {
  return <ThemeProvider theme={theme}>
    <Header/>
    <Grid container justify='center'>
      <Grid item xs={10}>
        <SearchBar/>
    </Grid>
    </Grid>
  </ThemeProvider>
};
