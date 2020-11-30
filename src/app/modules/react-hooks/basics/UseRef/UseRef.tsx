import React from 'react';

export const UseRef: React.FC = () => {
  const [value, setValue] = React.useState<string>('initial');
  const renderCount = React.useRef<number>(1);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const prevValue = React.useRef<string>('');

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  React.useEffect(() => {
    renderCount.current++;
  });

  React.useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button className="" onClick={focus}>Фокус</button>
    </div>
  );
};
