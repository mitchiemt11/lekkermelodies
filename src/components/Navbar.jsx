import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='container text-white mx-auto p-6 flex flex-col md:flex-row items-center justify-end'>
      <div className='flex -mx-6'>
        <Link to="/" className="mx-3 hover:opacity-80  duration-150">Home</Link> |
        <Link to="/overview" className="mx-3 hover:opacity-80  duration-150">Overview</Link> |
        <Link to="blog" className="mx-3 hover:opacity-80  duration-150">Blog</Link> |
        <Link to="about" className="mx-3 hover:opacity-80  duration-150">About</Link>
      </div>
    </header>
  );
}

export default Navbar;
