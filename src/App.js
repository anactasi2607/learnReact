import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import './styles/App.css';

import BaseNavigation from './components/UI/navigation/BaseNavigation';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <BaseNavigation />

      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
