import { OutlinedInput } from '@material-ui/core';
import React, { useState } from 'react';
import Router from 'next/router';

const SearchBar = () => {
  const [smnName, setSmnName] = useState<string>('고수달');
  const handleSubmit = (event) => {
    Router.push(`/summoner/userName=${smnName}`);
    event.preventDefault();
  };
  const handleChange = ({ target: { value } }) => setSmnName(value);
  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
      <OutlinedInput fullWidth value={smnName} onChange={handleChange} />
    </form>
  );
};

export default SearchBar;
