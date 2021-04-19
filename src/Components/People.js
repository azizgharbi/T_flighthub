
import React from 'react';

import Planet from './Planet';
import Starship from './Starship';

import { Container, PeopleContainer } from '../styles';

const People = ({ data }) => {
  return (
  <Container>
    {
      data.length
        ? data.map(({ name, homeworld, starships }, index) => {
          return (
        <PeopleContainer key={index}>
          <span className="name">{name}</span>
          <div className="list">
              <Planet key={index} planetUrl={homeworld}/>
              { starships.length
                ? <>
              <h3 className="title">Starships:</h3>
              {starships.map((link, i) =>
                <Starship key={i} starshipUrl={link} ></Starship>
              )}
              </>
                : <span className="people-message"> 0 Starships to display </span>
              }
          </div>
        </PeopleContainer>
          );
        })
        : <span className="container-message"> user is not found </span>
    }
  </Container>);
};

export default People;
