import React from 'react';
import PlayIcon from './PlayIcon';

const Cards = () => {
  return (
    <div className="max-w-xs rounded-lg bg-gray-400 overflow-hidden shadow-lg" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-between">
        <span className="inline-block bg-[#f50] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <PlayIcon className='text-white bg-white'  />
        </span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <div className="flex items-center justify-center">
            <input type='range' />
          </div>
        </span>
      </div>
    </div>
  );
}

export default Cards;
