import React from 'react';
import { Alert, AlertProvider, useAlert } from './Alert';

const MainComponent: React.FC = () => {
  const { show } = useAlert();

  return (
    <div>
      <h2>React Context</h2>
      <button onClick={() => show('Очень важное сообщение')}>Показать Alert</button>
    </div>
  );
};


export const UseReducer: React.FC = () => {
  return (
    <AlertProvider>
      <div>
        <Alert />
        <MainComponent />
      </div>
    </AlertProvider>
  );
};
