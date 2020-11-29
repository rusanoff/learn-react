import React from 'react';

const AlertContext = React.createContext({
  alertVisible: false,
  text: '',
  show: (text?: string) => {},
  hide: () => {},
});

const useAlert = () => React.useContext(AlertContext);

const SHOW_ALERT = 'show';
const HIDE_ALERT = 'hide';

type AlertAction = { type: 'show', text: string } | { type: 'hide' };
type AlertState = {
  alertVisible: boolean,
  text: string,
};
type AlertReducer = React.Reducer<AlertState, AlertAction>;

const reducer = (state: AlertState, action: AlertAction) => {
  switch (action.type) {
    case SHOW_ALERT: {
      return {
        ...state,
        alertVisible: true,
        text: action.text,
      };
    }
    case HIDE_ALERT: {
      return  {
        ...state,
        alertVisible: false,
      };
    }
    default: {
      return state;
    }
  }
};

const AlertProvider: React.FC = ({ children }) => {
  const [state, dispatchState] = React.useReducer<AlertReducer>(reducer, {
    alertVisible: false,
    text: '',
  });

  const show = (text = '') => {
    dispatchState({ type: SHOW_ALERT, text });
  };
  const hide = () => {
    dispatchState({ type: HIDE_ALERT });
  };

  const provided = {
    alertVisible: state.alertVisible,
    text: state.text,
    show,
    hide,
  };

  return (
    <AlertContext.Provider value={provided}>
      { children }
    </AlertContext.Provider>
  );
};

export {
  AlertProvider,
  useAlert,
};
