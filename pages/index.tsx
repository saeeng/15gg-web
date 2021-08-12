import { Typography, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import SearchForm from '../components/SearchForm';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Grid
        style={{ height: '100vh' }}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" align="center" color="primary">
          15.GG
        </Typography>
        <SearchForm />
      </Grid>
    </Container>
  );
}
