import React from 'react';
import { useAlert } from './AlertContext';

export const Alert: React.FC = () => {
  const { alertVisible } = useAlert();

  if (!alertVisible) {
    return null;
  }

  return (
    <div>
      <p>Важное сообщение</p>
    </div>
  );
};
