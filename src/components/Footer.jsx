import React from 'react';

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
          src='https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0xMF8xLnBuZw.png'
          alt='LinkedIn'
        />
      </a>
      <a
        href='https://dev.to/mitchiemt11'
        target='_blank'>
        <img
          className='mx-3 border-spacing-0 h-11'
          src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'
          alt='DEV Community'
        />
      </a>
      <a
        href='https://medium.com/@mitchiemt11'
        target='_blank'>
        <img 
          className='mx-3 border-spacing-0 h-11'
          src='https://cdn.icon-icons.com/icons2/2997/PNG/512/medium_logo_icon_187624.png'
          alt='Medium'
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
  