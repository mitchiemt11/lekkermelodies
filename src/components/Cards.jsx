import React from 'react';

const Cards = () => {
  return (
    <div class="max-w-xs rounded-lg bg-gray-400 overflow-hidden shadow-lg">
      <img class="w-full" src="https://picsum.photos/600/400/?random" alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    </div>
    <div class="px-6 pt-4 pb-2 justify-between">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    </div>
  </div>
  );
}

export default Cards;
