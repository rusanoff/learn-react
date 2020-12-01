import React from 'react';

interface UseEffectState {
  counter: number;
  step?: number;
}

interface UseEffectAction {
  type: 'tick' | 'step';
  step?: number;
}

type DataType = 'users' | 'todos' | 'posts';
type Coordinates = { x: number, y: number };

const initialState: UseEffectState = {
  counter: 0,
  step: 1,
};

const reducer = (state: UseEffectState, action: UseEffectAction): UseEffectState => {
  const { counter, step = 1 } = state;

  if (action.type === 'tick') {
    return { counter: counter + step, step };
  } else if (action.type === 'step') {
    return { counter, step: action.step };
  } else {
    throw new Error();
  }
};

export const UseEffect: React.FC = () => {
  const [type, setType] = React.useState<DataType>('users');
  const [data, setData] = React.useState<Record<string, any>[]>([]);
  const [pos, setPos] = React.useState<Coordinates>({
    x: 0,
    y: 0,
  });
  const [count, setCount] = React.useState<number>(0);
  const [state, dispatch] = React.useReducer<React.Reducer<UseEffectState, UseEffectAction>>(reducer, initialState);

  const { counter, step } = state;

  const handleMouseMove = (event: any) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  React.useEffect(() => {
    console.log('Render...');
  });

  React.useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json));

    return () => {
      console.log('clean type');
    };
  }, [type]);

  React.useEffect(() => {
    console.log('ComponentDidMount');

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Ресурс: {type} {count} {counter}</h1>

      <button onClick={() => setType('users')}>Пользователи</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Посты</button>
      <input value={step} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
          type: 'step',
          step: Number(e.target.value),
        });
      }} />

      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
};
