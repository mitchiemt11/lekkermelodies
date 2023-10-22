import React from 'react';
import PROFILE from '../assets/images/profile.jpg';
import MUSIC_NOTE from '../assets/images/music_note.png';

const About = () => {
  const backgroundStyle = {
    backgroundImage: `url(${MUSIC_NOTE})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-row flex-wrap p-3">
        <div className="mx-auto w-2/3">
          <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased" style={backgroundStyle}>
            <div className="md:w-1/3 w-full flex justify-center mt-20">
              <div className="rounded-full shadow-lg antialiased w-64 h-64 ">
                <img
                  className="rounded-full object-cover w-full h-72 border-4 border-gray-300"
                  src={PROFILE}
                  alt="User Profile"
                />
              </div>
            </div>
            <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
              <div className="w-full text-center font-semibold relative pt-3 md:pt-0">
                <div className="text-4xl text-white font-extrabold leading-tight uppercase pt-6">
                  Lekker Melodies
                </div>
                <div className="text-normal text-gray-300 mt-6">
                  <span className="border-b border-dashed border-gray-500 pb-1">
                    Creating a peaceful and focused atmosphere using the magic of sounds
                  </span>
                </div>
                <p className="text-gray-300 mt-12 pt-8 text-left">
                  I've always believed that the right sounds can make a world of difference
                  in our daily lives. Whether it's the gentle rustling of leaves in a forest
                  or the soft hum of a coffee shop, sounds have this incredible power to
                  transport us to a calmer, more focused state of mind.
                </p>
                <p className="text-gray-300 mt-4 text-left">
                  So, I decided to create <b>Lekker Melodies</b> as a place where you and
                  I can explore the incredible world of sounds together. I'm not a
                  sound guru or anything, just someone who appreciates the beauty of
                  a well-timed melody or the soothing rhythm of raindrops.
                </p>
                <p className="text-gray-300 mt-4 text-left">
                  Through <b>Lekker Melodies</b>, I want to share this love for sounds with
                  you and help you find your own moments of serenity in the midst of
                  life's chaos. Together, we can create a little oasis of calm, no matter where you are.
                </p>
                <p className="text-gray-300 mt-4 mb-8 text-left">
                  So, if you're curious about how the right sounds can make your day
                  a bit brighter or help you focus better, stick around. Let's embark
                  on this sound adventure together at <b>Lekker Melodies.</b>
                </p>
                <p className="text-gray-300 mt-4 mb-8 text-left">
                  So, if you're curious about how the right sounds can make your day
                  a bit brighter or help you focus better, stick around. Let's embark
                  on this sound adventure together at <b>Lekker Melodies.</b>
                </p>
                <h2 className="text-2xl text-white mt-8 mb-4 text-left">Images and Sounds Credits</h2>
                <ul className="list-disc pl-6 text-left text-white">
                  <li className="mt-2 mb-2">
                    <a
                      href="https://pixabay.com/"
                      target='blank'
                      className="text-white underline text-lg"
                    >Pixabay
                    </a>
                  </li>
                  <li className="mt-2 mb-2">
                    <a
                      href="https://ideogram.ai/t/trending"
                      target='blank'
                      className="text-white underline text-lg"
                    >Ideogram AI
                    </a>
                  </li>
                  <li className="mt-2 mb-2">
                    <a
                      href="https://pixabay.com/users/dennish18-26151496/"
                      className="text-white underline text-lg"
                      target='blank'
                    >Denis
                    </a>
                  </li>
                  <li className="mt-2 mb-2">
                    <a
                      href="https://pixabay.com/users/soundsforyou-4861230/"
                      target='blank'
                      className="text-white underline text-lg"
                    >Micheal - SoundsForYou
                    </a>
                  </li>
                  <li className="mt-2 mb-2">
                    <a
                      href="https://pixabay.com/users/white_records-32584949/"
                      target='blank'
                      className="text-white underline text-lg"
                    >Maksym Dudchyk - White Records
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
