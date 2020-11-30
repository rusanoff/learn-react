import React from 'react';

const useLogger = (value: string) => {
  React.useEffect(() => {
    console.log('Value was changed: ', value);
  }, [value]);
};

const useInput = (initialValue: string) => {
  const [value, setValue] = React.useState<string>(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const clear = () => {
    setValue('');
  };

  return {
    bind: {
      value,
      onChange,
    },
    value,
    clear,
  };
};

export const UseCustom: React.FC = () => {
  const input = useInput('');

  useLogger(input.value);

  return (
    <div>
      <input type="text" { ...input.bind } />
      <h1>{input.value}</h1>
      <button onClick={input.clear}>Clear</button>
    </div>
  );
};
