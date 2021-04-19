import React, { useReducer } from 'react';

import { searchPeople } from '../Services';
import { SearchBoxContainer } from '../styles';

import { reducer, initialSate, FETCH_PEOPLE } from '../Store';

const Search = () => {
  const [, dispatch] = useReducer(reducer, initialSate);

  let time;

  async function handleSearch (event) {
    clearTimeout(time);
    time = setTimeout(async function () {
      const { results } = await searchPeople(event.target.value);
      dispatch({ type: FETCH_PEOPLE, payload: results });
    }, 500);
  }

  return (
      <SearchBoxContainer>
          <input type="text" placeholder="Search..." onKeyUp={handleSearch}/>
      </SearchBoxContainer>

  );
};

export default Search;
