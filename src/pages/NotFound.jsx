import React from 'react';
import { Link } from 'react-router-dom';
import PAGE_NOT_FOUND from '../assets/images/page_not_found.png';

const NotFound = () => {
  return (
    <div className="bg-gray-300 rounded-t-3xl px-6 pt-32 lg:px-8">
      <Link to="/blog" className="text-gray-900 hover:text-gray-600 text-xl absolute top-40 left-20">
        &larr;  Back
      </Link>
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 text-center justify-center items-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">OOPS!</h1>
        <div className="flex flex-col items-center justify-center">
          <img
            src={PAGE_NOT_FOUND}
            alt="Page not found"
            className="mt-6"
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound