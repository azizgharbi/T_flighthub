import React, { useState, useEffect } from 'react';

import { getInfos } from '../Services';

import { Loader, ElementStyle } from '../styles';

const Starship = ({ starshipUrl }) => {
  const [starship, setStarship] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function fetchData () {
      const { name } = await getInfos(starshipUrl);
      setStarship({ name });
      setLoader(false);
    }
    fetchData();
  }, []);

  return (
      <ElementStyle>
        {loader
          ? (
          <Loader size={'5px'} />
            )
          : (
         <span>{starship.name}</span>
            )}
      </ElementStyle>
  );
};

export default Starship;
