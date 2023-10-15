import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Overview from './pages/Overview';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<Post />} />
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
