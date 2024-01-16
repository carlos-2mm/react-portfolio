import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}


export default App;