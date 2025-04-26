import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Outlet></Outlet>
    </>
  )
};

export default App;