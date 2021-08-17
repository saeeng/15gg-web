import { OutlinedInput } from '@material-ui/core';
import React, { useState } from 'react';
import Router from 'next/router';
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '100%',
      minWidth: '400px',
    },
  }),
);
const SearchBar = () => {
  const classes = useStyles();
  const [smnName, setSmnName] = useState<string>('고수달');
  const handleSubmit = (event) => {
    Router.push(`/summoner/userName=${smnName}`);
    event.preventDefault();
  };
  const handleChange = ({ target: { value } }) => setSmnName(value);
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <OutlinedInput fullWidth value={smnName} onChange={handleChange} />
    </form>
  );
};

export default SearchBar;
