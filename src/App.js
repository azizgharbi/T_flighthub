import React, { useEffect, useReducer } from 'react';

import People from './Components/People';
import Search from './Components/Search';

import { getPeople } from './Services';
import { reducer, initialSate, FETCH_PEOPLE } from './Store';

import {
  GlobalStyles,
  Loader
} from './styles';

export default function App () {
  const [state, dispatch] = useReducer(reducer, initialSate);

  useEffect(async () => {
    const { results } = await getPeople();
    console.log(results);
    dispatch({ type: FETCH_PEOPLE, payload: results });
  }, []);

  return (
    <>
      <GlobalStyles/>
      {state.loading
        ? <Loader size={'20px'} />
        : <>
      <Search></Search>
      <People />
      </>
      }
    </>
  );
}
