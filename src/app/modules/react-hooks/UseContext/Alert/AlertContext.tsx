import React from 'react';

const AlertContext = React.createContext({ alertVisible: false, toggleAlertVisible: () => {} });

export const useAlert = () => React.useContext(AlertContext);

export const AlertProvider: React.FC = ({ children }) => {
  const [alertVisible, setAlertVisible] = React.useState<boolean>(false);

  const toggleAlertVisible = () => {
    setAlertVisible(prevState => !prevState);
  };

  return (
    <AlertContext.Provider value={{ alertVisible, toggleAlertVisible }}>
        { children }
    </AlertContext.Provider>
  );
};
