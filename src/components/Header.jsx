import React from 'react';
import Navbar from './Navbar';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className='desktop-nav'>
      <div className='logo'>Carlos Macias</div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;