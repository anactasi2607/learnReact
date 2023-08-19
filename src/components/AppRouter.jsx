import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
  const isAuth = false;
  const currentRoutes = isAuth ? privateRoutes : publicRoutes;

  return (
    <Routes>
      {currentRoutes.map(route =>
        <Route
          key={route.path}
          element={route.element}
          path={route.path}
          exact={route.exact}
        />
      )}
    </Routes>
  );
}

export default AppRouter;
