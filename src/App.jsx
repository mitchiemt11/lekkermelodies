import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Overview from './pages/Overview';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
      <Footer />
    </>
  );
}

export default App;
