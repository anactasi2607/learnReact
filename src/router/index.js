import {Navigate} from 'react-router-dom';

import About from '../pages/About';
import Posts from '../pages/Posts';
import PostDetail from '../pages/PostDetail';
import Login from '../pages/Login';

export const privateRoutes = [
  {path: '/about', element: <About />, exact: true},
  {path: '/posts', element: <Posts />, exact: true},
  {path: '/posts/:id', element: <PostDetail />, exact: true},
  {path: '*', element: <Navigate to="/about" replace />, exact: true},
];

export const publicRoutes = [
  {path: '/login', element: <Login />, exact: true},
  {path: '*', element: <Navigate to="/login" replace />, exact: true},
];
