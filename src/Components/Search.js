import React from 'react';
import { searchPeople } from '../Services';
// Style
import { SearchBoxContainer } from '../styles';

const Search = ({ setData, setLoader }) => {
  let time;
  async function handleSearch (event) {
    clearTimeout(time);
    time = setTimeout(async function () {
      setLoader(true);
      const { results } = await searchPeople(event.target.value);
      setData(results);
      setLoader(false);
    }, 500);
  }

  return (
      <SearchBoxContainer>
          <input type="text" placeholder="Search..." onKeyUp={handleSearch}/>
      </SearchBoxContainer>

  );
};

export default Search;
