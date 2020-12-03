/**
 * Код из статьи https://habr.com/ru/company/vk/blog/454348/
 * NPM пакет: https://www.npmjs.com/package/use-global-hook
 */

import React from 'react';

function setState(this: any, newState: any) {
  this.state = { ...this.state, ...newState };
  this.listeners.forEach((listener: any) => {
    listener(this.state);
  });
}

function useCustom(this: any) {
  const newListener = React.useState()[1];

  React.useEffect(() => {
    this.listeners.push(newListener);

    return () => {
      this.listeners = this.listeners.filter((listener: any) => listener !== newListener);
    };
  }, []);

  return [this.state, this.actions];
}

function associateActions(store: any, actions: any) {
  const associatedActions: any = {};

  Object.keys(actions).forEach((key) => {
    if (typeof actions[key] === 'function') {
      associatedActions[key] = actions[key].bind(null, store);
    }

    if (typeof actions[key] === 'object') {
      associatedActions[key] = associateActions(store, actions[key]);
    }
  });

  return associatedActions;
}

export const getGlobalStateHook = (react: any, initialState: any, actions: any) => {
  const store: any = { state: initialState, listeners: [] };

  store.setState = setState.bind(store);
  store.actions = associateActions(store, actions);

  return useCustom.bind(store, react);
};
