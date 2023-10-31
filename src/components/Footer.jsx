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
      <Link target='_blank' to='https://www.linkedin.com/in/mitchell-mutandah-5726aa212/'>
        <img
          className='mx-3 border-spacing-0 h-11'
          src={LINKEDIN}
          alt='LinkedIn'
        />
      </Link>
      <Link target='_blank' to='https://dev.to/mitchiemt11'>
        <img
          className='mx-3 border-spacing-0 h-11'
          src={DEV}
          alt='DEV Community'
        />
      </Link>
      <Link target='_blank' to='https://github.com/mitchiemt11'>
        <img 
          className='mx-3 border-spacing-0 h-11'
          src={GITHUB}
          alt='Github'
        />
      </Link>
      </div>
      <div className='flex pt-16'>
        <p className="mx-3">© 2023 Lekker Melodies, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
  