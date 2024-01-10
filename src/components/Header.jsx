import React from 'react';
import Navbar from './Navbar';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className='desktop-nav'>
      <div className='logo-container'>
      <img className='logo-img'></img>
      <h2 className='logo-txt'>Carlos Macias</h2>
      </div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;