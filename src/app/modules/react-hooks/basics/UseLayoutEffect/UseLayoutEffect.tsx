import React from 'react';

export const UseLayoutEffect: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    if (!value) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log('Render...');

  return (
    <div onClick={() => setValue(0)}>
      { value }
    </div>
  );
};
