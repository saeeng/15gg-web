import { Typography, Grid, Box, Chip, Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: '100px',
      padding: theme.spacing(1),
    },
    pa1: {
      padding: theme.spacing(1),
    },
    icon: {
      width: '100px',
      height: '100px',
      marginRight: theme.spacing(1),
    },
  }),
);

const Card = (icon: string, children) => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default Card;
