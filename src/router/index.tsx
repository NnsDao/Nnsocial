import { RouteObject, useRoutes } from 'react-router-dom';
import Account from '../pages/Account/account';
import Home from '../pages/Home';

import React from 'react';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    index: true,
  },
  {
    path: '/account',
    element: <Account />,
    index: true,
  },
];

export default function AppRouter() {
  // window.scroll(0, 0);
  return <React.Fragment>{useRoutes(routes)}</React.Fragment>;
}
