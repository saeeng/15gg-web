import { Typography, Container, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

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
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" align="center" color="primary">
        15.gg
      </Typography>
      <form noValidate>
        <TextField id="standard-basic" label="Standard" variant="outlined" />
      </form>
    </Container>
  );
}
