import React from 'react';
import { useNamedReducer } from './UseNamedReducer';

export const UseNamedReducerExample: React.FC = () => {
  const {count, increase, decrease, reset} = useNamedReducer();

  return (
    <div>
      <div>
        {count}
      </div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
