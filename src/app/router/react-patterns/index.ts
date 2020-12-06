import { RouteProps } from 'react-router-dom';
import { HighOrderComponentExample } from '../../modules/react-patterns';

export const patternsRoutes: RouteProps[] = [
  {
    path: '/patterns/hoc',
    component: HighOrderComponentExample,
  },
];
