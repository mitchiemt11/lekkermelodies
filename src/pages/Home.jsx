import React from 'react'
import Cards from '../components/Cards';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col text-white'>
      <main className='container mx-auto px-6 pt-14 flex-1 text-center'>
        <h2 className="text-2xl font-bold md:text-4xl lg:text-6xl uppercase">
          Lekker Melodies
        </h2>
        <p className='text-lg md:text-2xl lg:text-3xl py-2 px-4 md:px-10 md:py-4 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mb-8 mx-auto rounded-full'>
          Your Ambient Sonic Sanctuary
        </p>
        <div className='mt-9'>
          <Cards />
        </div>

        <a href="https://play.google.com/store/apps/details?id=com.lekkermelodies&hl=en" target="_blank" rel="noopener noreferrer">
          <img className='h-24' src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Get it on Google Play" />
        </a>

      </main>
    </div>
  )
}

export default Home;