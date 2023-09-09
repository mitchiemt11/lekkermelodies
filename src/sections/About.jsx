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
                <p className="text-gray-300 mt-12 pt-8">
                  I've always believed that the right sounds can make a world of difference
                  in our daily lives. Whether it's the gentle rustling of leaves in a forest
                  or the soft hum of a coffee shop, sounds have this incredible power to 
                  transport us to a calmer, more focused state of mind.
                </p>
                <p className="text-gray-300 mt-4">
                  So, I decided to create <b>Lekker Melodies</b> as a place where you and
                  I can explore the incredible world of sounds together. I'm not a
                  sound guru or anything, just someone who appreciates the beauty of
                  a well-timed melody or the soothing rhythm of raindrops.
                </p>
                <p className="text-gray-300 mt-4">
                  Through <b>Lekker Melodies</b>, I want to share this love for sounds with
                  you and help you find your own moments of serenity in the midst of
                  life's chaos. Together, we can create a little oasis of calm, no matter where you are.
                </p>
                <p className="text-gray-300 mt-4 mb-8">
                  So, if you're curious about how the right sounds can make your day
                  a bit brighter or help you focus better, stick around. Let's embark
                  on this sound adventure together at <b>Lekker Melodies.</b>
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
