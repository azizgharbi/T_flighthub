import React from 'react'
import { searchPeople } from '../Services'
// Style

const Search = ({ setData }) => {
  let time
  async function handleSearch (event) {
    clearTimeout(time)
    time = setTimeout(async function () {
      const { results } = await searchPeople(event.target.value)
      setData(results)
    }, 500)
  }

  return (
      <input type="text" onKeyUp={handleSearch}/>
  )
}

export default Search
