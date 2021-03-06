import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';
import { MainPage } from '../components/MainPage';
import { hooksBasicsRoutes, hooksCustomRoutes } from './react-hooks';
import { patternsRoutes } from './react-patterns';
import { reduxRoutes } from './redux';

const routes: RouteProps[] = [
  {
    path: '/',
    component: MainPage,
    exact: true,
  },
  ...hooksBasicsRoutes,
  ...hooksCustomRoutes,
  ...patternsRoutes,
  ...reduxRoutes,
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
