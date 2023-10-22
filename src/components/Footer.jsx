import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='p-6 flex flex-col md:flex-row items-center justify-between text-white'>
      <p className='mx-3 pt-16'>Built with 💝 by <Link className='text-white hover:text-[#0274ff]' to='https://dev.to/mitchiemt11'>Mitchell Mutandah</Link> </p>
      <div className='flex pt-16'>
        <p className="mx-3">© 2023 Lekker Melodies, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
  