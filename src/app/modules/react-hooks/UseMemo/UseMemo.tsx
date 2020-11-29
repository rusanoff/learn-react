import React from 'react'

const complexCompute = (num: number) => {
  console.log('Complex compute...');

  let i = 0;

  while (i < 1000000000) {
    i++
  }

  return num * 2
};

export const UseMemo: React.FC = () => {
  const [number, setNumber] = React.useState<number>(42);
  const [colored, setColored] = React.useState<boolean>(false);

  const styles = React.useMemo(() => ({
    color: colored ? 'darkred' : 'black',
  }), [colored]);
  const computed = React.useMemo(() => complexCompute(number), [number]);

  React.useEffect(() => {
    console.log('Styles changed');
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>
    </>
  );
};
