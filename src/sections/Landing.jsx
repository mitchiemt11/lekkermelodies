import React from 'react'

const Landing = () => {
  return (
    <div className='min-h-screen flex flex-col text-white'>
      <header className='container mx-auto p-6 flex flex-col md:flex-row items-center justify-end'>
        <div className='flex -mx-6'>
          <a href="#" className="mx-3 hover:opacity-80  duration-150">Overview</a> |
          <a href="#" className="mx-3 hover:opacity-80  duration-150">About</a> |
          <a href="#" className="mx-3 hover:opacity-80  duration-150">Blog</a>
        </div>
      </header>
      <main className='container mx-auto px-6 pt-14 flex-1 text-center'>
        <h2 className="text-2xl font-bold md:text-4xl lg:text-6xl uppercase">
          Lekker Melodies 
        </h2>
        <p className='text-lg md:text-2xl lg:text-3xl py-2 px-4 md:px-10 md:py-4 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mb-8 mx-auto rounded-full'>
          Your Ambient Sonic Sanctuary
        </p>
      </main>
    </div>
  )
}

export default Landing;