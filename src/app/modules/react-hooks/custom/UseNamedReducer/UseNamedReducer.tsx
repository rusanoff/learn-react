import React from 'react';

const INCREASE = 'increase' as const;
const DECREASE = 'decrease' as const;
const RESET = 'reset' as const;

const initialState = 0;

type UseNamedReducerAction = { type: typeof INCREASE | typeof DECREASE | typeof RESET };
type UseNamedReducerReducer = React.Reducer<number, UseNamedReducerAction>;

const reducer = (state: number, action: UseNamedReducerAction) => {
  switch (action.type) {
    case 'increase': return state + 1;
    case 'decrease': return state - 1;
    case 'reset': return initialState;
    default: throw new Error('Unexpected action');
  }
};

export const useNamedReducer = () => {
  const [count, dispatch] = React.useReducer<UseNamedReducerReducer>(reducer, initialState);

  const increase = React.useCallback(() => dispatch({ type: INCREASE }), []);
  const decrease = React.useCallback(() => dispatch({ type: DECREASE }), []);
  const reset = React.useCallback(() => dispatch({ type: RESET }), []);

  return {
    count,
    increase,
    decrease,
    reset,
  };
};
