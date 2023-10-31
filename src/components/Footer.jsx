import React from 'react';
import { Link } from 'react-router-dom';
import GITHUB from '../assets/images/github.png';
import DEV from '../assets/images/dev.png';
import LINKEDIN from '../assets/images/linkedin.png';

function Footer() {
  return (
    <footer className='p-6 flex flex-col md:flex-row items-center justify-between text-white'>
      <p className='mx-3 pt-16'>Built with 💝 by Mitchell Mutandah</p>
      <div className='flex pt-16'>
      <a
        href='https://www.linkedin.com/in/mitchell-mutandah-5726aa212/'
        target='_blank'>
        <img
          className='mx-3 border-spacing-0 h-11'
          src={LINKEDIN}
          alt='LinkedIn'
        />
      </a>
      <a
        href='https://dev.to/mitchiemt11'
        target='_blank'>
        <img
          className='mx-3 border-spacing-0 h-11'
          src={DEV}
          alt='DEV Community'
        />
      </a>
      <a
        href='https://github.com/mitchiemt11'
        target='_blank'>
        <img 
          className='mx-3 border-spacing-0 h-11'
          src={GITHUB}
          alt='Github'
        />
      </a>
      </div>
      <div className='flex pt-16'>
        <p className="mx-3">© 2023 Lekker Melodies, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
  