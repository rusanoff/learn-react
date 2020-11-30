import React from 'react';
import { Alert, AlertProvider, useAlert } from './Alert';

const MainComponent: React.FC = () => {
  const { toggleAlertVisible } = useAlert();

  return (
    <div>
      <h2>React Context</h2>
      <button onClick={toggleAlertVisible}>Показать Alert</button>
    </div>
  );
};

export const UseContext: React.FC = () => {
  return (
      <AlertProvider>
        <div>
          <Alert />
          <MainComponent />
        </div>
      </AlertProvider>
  );
};
