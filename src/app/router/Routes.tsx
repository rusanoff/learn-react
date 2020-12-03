import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';
import { MainPage } from '../components/MainPage';
import { hooksBasicsRoutes, hooksCustomRoutes } from './react-hooks';

const routes: RouteProps[] = [
  {
    path: '/',
    component: MainPage,
    exact: true,
  },
  ...hooksBasicsRoutes,
  ...hooksCustomRoutes,
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
