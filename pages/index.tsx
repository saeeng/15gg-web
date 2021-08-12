import { Typography, Container, OutlinedInput, FormControl, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import React, { useState } from 'react';
import Router from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);
export default function Home() {
  const [smnName, setSmnName] = useState<string>('고수달');
  const classes = useStyles();
  const handleSubmit = (event) => {
    Router.push(`/summoner/userName=${smnName}`);
    alert('A name was submitted: ');
    event.preventDefault();
  };
  const handleChange = ({ target: { value } }) => setSmnName(value);
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
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <OutlinedInput fullWidth value={smnName} onChange={handleChange} />
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
          >
            Sign In
          </Button> */}
        </form>
      </Grid>
    </Container>
  );
}
