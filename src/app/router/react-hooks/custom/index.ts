import { RouteProps } from 'react-router-dom';
import { UseGlobalStateExample, UseNamedReducerExample } from '../../../modules/react-hooks';

export const hooksCustomRoutes: RouteProps[] = [
  {
    path: '/hooks/custom/use-global-state',
    component: UseGlobalStateExample,
  },
  {
    path: '/hooks/custom/use-named-reducer',
    component: UseNamedReducerExample,
  },
];
