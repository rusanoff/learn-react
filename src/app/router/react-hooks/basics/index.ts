import { RouteProps } from 'react-router-dom';
import {
  UseState,
  UseEffect,
  UseRef,
  UseMemo,
  UseCallback,
  UseContext,
  UseReducer,
  UseCustom,
  UseLayoutEffect,
} from '../../../modules/react-hooks';

export const hooksBasicsRoutes: RouteProps[] = [
  {
    path: '/hooks/basics/use-state',
    component: UseState,
  },
  {
    path: '/hooks/basics/use-effect',
    component: UseEffect,
  },
  {
    path: '/hooks/basics/use-ref',
    component: UseRef,
  },
  {
    path: '/hooks/basics/use-memo',
    component: UseMemo,
  },
  {
    path: '/hooks/basics/use-callback',
    component: UseCallback,
  },
  {
    path: '/hooks/basics/use-context',
    component: UseContext,
  },
  {
    path: '/hooks/basics/use-reducer',
    component: UseReducer,
  },
  {
    path: '/hooks/basics/use-custom',
    component: UseCustom,
  },
  {
    path: '/hooks/basics/use-layout-effect',
    component: UseLayoutEffect,
  },
];
