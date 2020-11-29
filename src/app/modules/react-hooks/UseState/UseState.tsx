import React from 'react';

interface DataState {
  title: string;
  date: number;
}

const computeInitialCount = (): number => {
  console.log('Calculation...');
  return Math.trunc(Math.random() * 10);
};

export const UseState: React.FC = () => {
  const [count, setCount] = React.useState<number>(() => computeInitialCount());
  const [state, setState] = React.useState<DataState>({title: 'Счетчик', date: Date.now()});

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleIncreaseTwice = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const handleDataChange = () => {
    setState((prevState) => ({
      ...prevState,
      date: Date.now(),
    }));
  };

  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <button onClick={handleIncrease}>Прибавить</button>
      <button onClick={handleDecrease}>Отнять</button>
      <button onClick={handleIncreaseTwice}>Прибавить два раза</button>
      <button onClick={handleDataChange}>Изменить Данные</button>
      <pre>
        { JSON.stringify(state, null, 2) }
      </pre>
    </div>
  );
}
