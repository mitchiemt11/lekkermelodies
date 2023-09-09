import React from 'react'

const Landing = () => {
  return (
    <div className='min-h-screen flex flex-col text-white'>
			<header className='container mx-auto p-6 flex flex-col md:flex-row items-center justify-between'>
        <div className='flex -mx-6'>
          <a href="#" className="mx-3 hover:opacity-80 duration duration-150">Overview</a> |
          <a href="#" className="mx-3 hover:opacity-80 duration duration-150">About</a> |
          <a href="#" className="mx-3 hover:opacity-80 duration duration-150">Blog</a>
        </div>
      </header>
    </div>
  )
}

export default Landing;