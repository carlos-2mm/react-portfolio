import React from 'react';
import Navbar from './Navbar';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className='desktop-nav'>
      <div className='logo-container'>
      <img className='logo-img' src='/logo.png' alt='Carlos Macias' />
      <h2 className='logo-txt'>Carlos <span className='logo-subtxt'>Macias</span></h2>
      </div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;