import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  )
};

export default App;