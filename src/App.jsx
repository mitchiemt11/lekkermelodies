import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Overview from './pages/Overview';

function App() {
  return (
    <>
      <header className='container text-white mx-auto p-6 flex flex-col md:flex-row items-center justify-end'>
        <div className='flex -mx-6'>
          <Link to="/" className="mx-3 hover:opacity-80  duration-150">Home</Link> |
          <Link to="/overview" className="mx-3 hover:opacity-80  duration-150">Overview</Link> |
          <Link to="blog" className="mx-3 hover:opacity-80  duration-150">Blog</Link> |
          <Link to="about" className="mx-3 hover:opacity-80  duration-150">About</Link> 
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <footer className='p-6 flex flex-col md:flex-row items-center justify-between text-white'>
        <p className='mx-3 pt-16'>Built with 💝 by Mitchell Mutandah</p>
        <div className='flex pt-16'>
          <p className="mx-3">© 2023 Lekker Melodies, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default App;
