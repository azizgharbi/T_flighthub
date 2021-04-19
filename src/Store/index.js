
import { FETCH_PEOPLE, INCREMENT_COUNTER, DECREMENT_COUNTER } from './constants';

export const initialSate = {
  loading: true,
  results: [],
  counter: 2
};

function increment (counter) {
  if (counter < 9) {
    return counter + 1;
  }
  return counter;
}

function decrement (counter) {
  if (counter > 1) {
    return counter - 1;
  }
  return counter;
}

export const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        loading: false,
        results: action.payload,
        counter: state.counter
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        loading: true,
        counter: increment(state.counter)
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        loading: true,
        counter: decrement(state.counter)
      };
    default:
      return state;
  }
};
