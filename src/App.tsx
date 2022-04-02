import React from 'react';
import { Router, Outlet } from 'react-location';
import Header from './components/Header/Header';
import { routes, location } from './router';

function App() {
  return (
    <Router routes={routes} location={location}>
      <Header />
      <Outlet /> {/* Start rendering router matches */}
    </Router>
  );
}

export default App;
