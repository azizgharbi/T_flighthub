
import React from 'react';

import Planet from './Planet';
import Starship from './Starship';

import { Container, PeopleContainer } from '../styles';

const People = ({ data }) => {
  return (
  <Container>
    {data.map(({ name, homeworld, starships }, index) => {
      return (
      <PeopleContainer key={index}>
        <span className="name">{name} </span>
        <div className="list">
            <Planet key={index} planetUrl={homeworld}/>
            { starships.length
              ? <>
            <h3>Starships:</h3>
            {starships.map((link, index) =>
                <Starship key={index} starshipUrl={link} ></Starship>
            )}
            </>
              : null}
        </div>
      </PeopleContainer>
      );
    })}
    </Container>);
};

export default People;
