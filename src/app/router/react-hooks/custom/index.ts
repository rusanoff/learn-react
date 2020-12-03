import { RouteProps } from 'react-router-dom';
import { UseGlobalStateExample } from '../../../modules/react-hooks';

export const hooksCustomRoutes: RouteProps[] = [
  {
    path: '/hooks/custom/use-global-state',
    component: UseGlobalStateExample,
  },
];
