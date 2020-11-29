import React from 'react';
import { useAlert } from './AlertContext';

export const Alert: React.FC = () => {
  const { hide, alertVisible, text } = useAlert();

  if (!alertVisible) {
    return null;
  }

  return (
    <div>
      <p onClick={hide}>{ text }</p>
    </div>
  );
};
