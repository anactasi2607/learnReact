import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import About from '../pages/About';
import Posts from '../pages/Posts';
import PostDetail from '../pages/PostDetail';
import Error from '../pages/Error';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route exact path="/posts" element={<Posts />}></Route>
      <Route exact path="/posts/:id" element={<PostDetail />}></Route>
      <Route path="/error" element={<Error />}></Route>
      <Route
        path="*"
        element={<Navigate to="/about" replace />}
        />
    </Routes>
  );
}

export default AppRouter;
