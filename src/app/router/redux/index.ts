import { RouteProps } from 'react-router-dom';
import { PostsBoard } from '../../modules/redux';

export const reduxRoutes: RouteProps[] = [
  {
    path: '/redux/posts-board',
    component: PostsBoard,
  },
];
