
import React from 'react';

import Planet from './Planet';
import Starship from './Starship';
import { PeopleContainer } from '../styles';

const People = ({ data }) =>
  data.map(({ name, homeworld, starships }, index) => {
    return (
      <PeopleContainer key={index}>
        <span className="name">{name} </span>
        <div className="list">
            <Planet key={index} planetUrl={homeworld}/>
            {starships.length
              ? <div>
            <h1>Starships</h1>
            {starships.map((link, index) =>
                <Starship key={index} starshipUrl={link} ></Starship>
            )}
            </div>
              : null}

        </div>
      </PeopleContainer>
    );
  });

export default People;
