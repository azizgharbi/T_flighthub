import React, { useState, useEffect } from 'react';

import { getInfos } from '../Services';

import { Loader, ElementStyle } from '../styles';

const Planet = ({ planetUrl }) => {
  const [planet, setPlanet] = useState(null);
  const [loader, setLoader] = useState(true);

  function formtDate (date) {
    // eslint-disable-next-line no-useless-escape
    const regex = /\d{4}\-\d{2}\-\d{2}/g;
    return date.match(regex);
  }

  useEffect(() => {
    async function fetchData () {
      const { name, created } = await getInfos(planetUrl);
      setPlanet({ name, created });
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
          <div className="tooltip">
            {planet.name}
            <span className="tooltiptext">Created: {formtDate(planet.created)}</span>
          </div>
            )}
      </ElementStyle>
  );
};

export default Planet;
