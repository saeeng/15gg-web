import { useRouter } from 'next/router';
import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';

import SmnInfo from '../../../components/SmnInfo';
import axios from 'axios';
const SummonerPage = (summoner: any) => {
  const [user, setUser] = useState<any>(summoner.summoner);
  useEffect(() => {
    console.log(user);
  });
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <SmnInfo summoner={user.summoner} league={user.league}></SmnInfo>
      </Container>
    </>
  );
};
SummonerPage.getInitialProps = async (ctx) => {
  const userName = ctx.query.smnName;
  const smnNameRegex = /(?<=userName=).*/;
  const userNameMathces = userName.match(smnNameRegex);
  const { data: summoner } = await axios.get(
    `http://localhost:8000/api/test/${encodeURI(userNameMathces)}`,
  );
  return { summoner };
};

export default SummonerPage;
