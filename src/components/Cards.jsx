import React from 'react';
import PlayIcon from './PlayIcon';

const Cards = () => {
  const cardData = [
    { title: 'Evening Birds' },
    { title: 'Campfire Crackling' },
    { title: 'Wind Outside' },
    { title: 'Small Waves' },
    { title: 'White Noise' },
    { title: 'Rain Ambient' },
    { title: 'Nature Relax: Birds' },
    { title: 'Lightning & Thunder' },
    { title: 'Chimes Bells' },
    { title: 'Night Field Cricket' },
    { title: 'Soft Piano' },
    { title: 'Calm River' },
  ];

  return (
    <div className="flex flex-wrap -mx-4">
      {cardData.map((card, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <div className="max-w-xs rounded-lg bg-gray-400 overflow-hidden shadow-lg" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.title}</div>
            </div>
            <div className="px-6 pt-4 pb-2 flex items-center justify-between">
              <span className="inline-block cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <PlayIcon />
              </span>
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <div className="flex items-center justify-center">
                  <input type='range' />
                </div>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
