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

const SmnInfo = ({ summoner, league }) => {
  const classes = useStyles();

  const profileIcon = `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/${summoner.profileIconId}.png`;
  const tierIcon = `/images/ranked-emblems/Emblem_${league.tier}.png`;

  return (
    <div className={classes.root}>
      <Grid container className={classes.root}>
        <Grid container alignItems="center" justifyContent="flex-start" item xs={6}>
          <Grid item>
            <Avatar src={profileIcon} className={classes.icon} alt="icon" />
          </Grid>
          <Grid item>
            <Chip size="small" label="tier1" variant="outlined" />
            <Chip size="small" label="tier2" variant="outlined" />
            <Chip size="small" label="tier3" variant="outlined" />
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                {summoner.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={6}>
          <Grid item xs={6}>
            <Grid item>
              <Image
                width="100%"
                height="100%"
                className={classes.icon}
                src={tierIcon}
                alt="icon"
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            temp
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SmnInfo;
