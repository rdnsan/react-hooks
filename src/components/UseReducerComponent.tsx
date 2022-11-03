import { useReducer } from 'react';
import Spacing from './Spacing';

const initialState = {
  counter: 100,
};

type ACTION_TYPES =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number };

const counterReducer = (state: typeof initialState, action: ACTION_TYPES) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case 'decrement':
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      throw new Error('Bad action');
  }
};

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>{state.counter}</p>
      <div>
        <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
          Increment
        </button>
        <Spacing type="x" />
        <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducerComponent;
