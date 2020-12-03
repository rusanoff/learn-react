import React from 'react';
import { getGlobalStateHook } from './UseGlobalState';

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};
const actions = {
  increase: (store: any) => {
    store.setState({ counter: store.state.counter + 1 });
  },
  decrease: (store: any) => {
    store.setState({ counter: store.state.counter - 1 });
  },
};

const useGlobalState = getGlobalStateHook(React, initialState, actions)

const Counter: React.FC = () => {
  const [globalState, globalActions] = useGlobalState();

  return (
    <div>
      <h1>{ globalState.counter }</h1>
      <button onClick={globalActions.increase}>+</button>
      <button onClick={globalActions.decrease}>-</button>
    </div>
  );
};

export const UseGlobalStateExample: React.FC = () => {
  return (
    <div>
      <Counter />
      <hr/>
      <Counter />
    </div>
  );
};
