import React, { useState, useEffect } from 'react';

import People from './Components/People';
import Search from './Components/Search';

import { getPeople } from './Services';

import {
  GlobalStyles,
  Loader,
  Container
} from './styles';

export default function App () {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(async () => {
    async function fetchData () {
      const { results } = await getPeople();
      setData(results);
      setLoader(false);
    }
    fetchData();
  }, []);

  return (
    <Container className="App">
      <GlobalStyles />
      {loader
        ? <Loader size={'20px'} />
        : <>
      <Search setData={setData}></Search>
      <People data={data} />
      </>}
    </Container>
  );
}
