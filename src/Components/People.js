
import React, { useReducer, useEffect } from 'react';

import Planet from './Planet';
import Starship from './Starship';
import Search from './Search';

import { reducer, initialSate } from '../Store';
import { FETCH_PEOPLE, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../Store/constants';
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
    <>
      <Search dispatch={dispatch}></Search>
      <Container>
        {
         !state.loading
           ? <>
           {state.results.map(({ name, homeworld, starships }, index) => {
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
           })}
            <Actions>
              <button className="previous-btn" onClick={previousPage}>previous</button>
              <button className="next-btn" onClick={nextPage}>Next</button>
            </Actions>
           </>
           : <Loader size={'20px'}/>
        }
      </Container>
  </>
  );
};

export default People;
