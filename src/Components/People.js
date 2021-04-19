
import React, { useReducer, useEffect } from 'react';

import Planet from './Planet';
import Starship from './Starship';

import { reducer, initialSate, FETCH_PEOPLE, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../Store';
import { getPeople } from '../Services';

import { Container, PeopleContainer, Loader, Actions } from '../styles';

const People = () => {
  const [state, dispatch] = useReducer(reducer, initialSate);

  useEffect(async () => {
    const { results } = await getPeople();
    dispatch({ type: FETCH_PEOPLE, payload: results });
  }, []);

  async function nextPage () {
    dispatch({ type: INCREMENT_COUNTER });
    const { results } = await getPeople(state.counter);
    dispatch({ type: FETCH_PEOPLE, payload: results });
  }

  async function previousPage () {
    dispatch({ type: DECREMENT_COUNTER });
    const { results } = await getPeople(state.counter);
    dispatch({ type: FETCH_PEOPLE, payload: results });
  }

  return (
  <Container>
    {
     !state.loading
       ? state.results.map(({ name, homeworld, starships }, index) => {
         return (
        <PeopleContainer key={index}>
          <span className="name">{name}</span>
          <div className="list">
              <Planet key={index} planetUrl={homeworld}/>
              { starships.length
                ? <>
              <h3 className="title">Starships:</h3>
              {starships.map((link, i) =>
                <Starship key={i} starshipUrl={link} />
              )}
              </>
                : <span className="people-message"> 0 Starships to display </span>
              }
          </div>
        </PeopleContainer>
         );
       })
       : <Loader size={'20px'}/>
    }
    <Actions>
    <button className="previous-btn" onClick={previousPage}>previous</button>
    <button className="next-btn" onClick={nextPage}>Next</button>
    </Actions>

  </Container>
  );
};

export default People;
