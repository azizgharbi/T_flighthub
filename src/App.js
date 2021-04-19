import React from 'react';

import People from './Components/People';
import Search from './Components/Search';

import {
  GlobalStyles
} from './styles';

export default function App () {
  return (
    <>
      <GlobalStyles/>
      <Search />
      <People />
    </>
  );
}
