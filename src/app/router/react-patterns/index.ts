import { RouteProps } from 'react-router-dom';
import { HighOrderComponentExample, RenderPropsExample } from '../../modules/react-patterns';

export const patternsRoutes: RouteProps[] = [
  {
    path: '/patterns/hoc',
    component: HighOrderComponentExample,
  },
  {
    path: '/patterns/render-props',
    component: RenderPropsExample,
  },
];
