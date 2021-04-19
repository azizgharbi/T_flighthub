import React from 'react';

import { searchPeople } from '../Services';
import { SearchBoxContainer } from '../styles';

const Search = ({ setData }) => {
  let time;
  async function handleSearch (event) {
    clearTimeout(time);
    time = setTimeout(async function () {
      const { results } = await searchPeople(event.target.value);
      setData(results);
    }, 500);
  }

  return (
      <SearchBoxContainer>
          <input type="text" placeholder="Search..." onKeyUp={handleSearch}/>
      </SearchBoxContainer>

  );
};

export default Search;
