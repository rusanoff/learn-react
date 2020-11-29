import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';
import { MainPage } from '../components/MainPage';
import {
  UseCallback,
  UseContext,
  UseEffect,
  UseMemo,
  UseReducer,
  UseRef,
  UseState,
} from '../modules/react-hooks';

const routes: RouteProps[] = [
  {
    path: '/',
    component: MainPage,
    exact: true,
  },
  {
    path: '/hooks/use-state',
    component: UseState,
  },
  {
    path: '/hooks/use-effect',
    component: UseEffect,
  },
  {
    path: '/hooks/use-ref',
    component: UseRef,
  },
  {
    path: '/hooks/use-memo',
    component: UseMemo,
  },
  {
    path: '/hooks/use-callback',
    component: UseCallback,
  },
  {
    path: '/hooks/use-context',
    component: UseContext,
  },
  {
    path: '/hooks/use-reducer',
    component: UseReducer,
  },
];

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        {
          routes.map((route, i) => (
            <Route key={i} { ...route } />
          ))
        }
      </Switch>
    </Router>
  );
}
