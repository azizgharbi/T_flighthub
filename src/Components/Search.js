import React from 'react';

import { searchPeople } from '../Services';
import { SearchBoxContainer } from '../styles';

import { FETCH_PEOPLE } from '../Store/constants';

const Search = ({ dispatch }) => {
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
