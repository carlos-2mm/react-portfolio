import React from 'react';
import Navbar from './Navbar';

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Carlos Macias</h1>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;