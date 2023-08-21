import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import { AuthContext } from '../context';

import { privateRoutes, publicRoutes } from '../router';
import BaseLoader from './UI/loader/BaseLoader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  const currentRoutes = isAuth ? privateRoutes : publicRoutes;

  if (isLoading) {
    return <BaseLoader />
  }

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
