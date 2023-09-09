import React from 'react';

const About = () => {
  const backgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-row flex-wrap p-3">
        <div className="mx-auto w-2/3">
          <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased" style={backgroundStyle}>
            <div className="md:w-1/3 w-full">
              <img className="rounded-full shadow-lg antialiased" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="User Profile" />
            </div>
            <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
            <div className="w-full text-center text-gray-700 font-semibold relative pt-3 md:pt-0">
  <div className="text-3xl text-white font-extrabold leading-tight uppercase pt-6">
    Lekker Melodies
  </div>
  <div className="text-normal text-gray-300 mt-6">
    <span className="border-b border-dashed border-gray-500 pb-1">
      Creating a peaceful and focused atmosphere using the magic of sounds
    </span>
  </div>
  <p className="text-gray-400 mt-12 pt-8">
    Welcome to Lekker Melodies, where music transforms into an oasis of tranquility and focus. Our journey began with a simple goal - to harness the mystical power of sounds and craft a serene experience that enriches your life. Dive into the realm of harmonious melodies that serve as your companion in both creativity and relaxation.
  </p>
  <p className="text-gray-400 mt-4">
    At Lekker Melodies, we believe that the right music can transport you to a world of boundless inspiration. Whether you're seeking solace in the midst of a busy day or aiming to enhance your productivity, our carefully curated collection of melodies has you covered. Each note is a piece of magic, meticulously chosen to create an atmosphere that resonates with your soul.
  </p>
  <p className="text-gray-400 mt-4">
    Join us on this sonic journey and let the symphony of Lekker Melodies elevate your daily experiences. It's more than just music; it's a transformative escape. Discover the extraordinary within the ordinary.
  </p>
  <p className="text-gray-400 mt-4">
    Image credits: Background photo by [Photographer's Name] on Unsplash, User Profile image by [Photographer's Name] on Pixabay.
  </p>
</div>

            </div>
            
           

          </div>
        </div>
      </div>
    </>
  )
}

export default About;
