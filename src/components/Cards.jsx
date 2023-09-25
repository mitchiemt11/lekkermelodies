import React from 'react';
import PlayIcon from './PlayIcon';
import PauseIcon from './PauseIcon';
import Campfire from '../data/nature_sounds/campfire-crackling.mp3'
import CalmRiver from '../data/nature_sounds/calm-river.mp3'
import Chimes from '../data/nature_sounds/chimes-bells.mp3'
import Eveningbirds from '../data/nature_sounds/evening-birds.mp3'
import Thunder from '../data/nature_sounds/lighting-thunder.mp3'
import Nature from '../data/nature_sounds/nature-relax-birds.mp3'
import Night from '../data/nature_sounds/night-field-cricket.mp3'
import Rain from '../data/nature_sounds/rain-ambient.mp3'
import Waves from '../data/nature_sounds/small-waves.mp3'
import Piano from '../data/nature_sounds/soft-piano.mp3'
import WhiteNoise from '../data/nature_sounds/white-noise.mp3'
import Wind from '../data/nature_sounds/wind-outside.mp3'

const Cards = () => {
  const cardData = [
    { title: 'Evening Birds', audioSrc: Eveningbirds },
    { title: 'Campfire Crackling', audioSrc: Campfire },
    { title: 'Wind Outside', audioSrc: Wind },
    { title: 'Small Waves', audioSrc: Waves },
    { title: 'White Noise', audioSrc: WhiteNoise },
    { title: 'Rain Ambient', audioSrc: Rain },
    { title: 'Nature Relax: Birds', audioSrc: Nature },
    { title: 'Lightning & Thunder', audioSrc: Thunder },
    { title: 'Chimes Bells', audioSrc: Chimes },
    { title: 'Night Field Cricket', audioSrc: Night },
    { title: 'Soft Piano', audioSrc: Piano },
    { title: 'Calm River', audioSrc: CalmRiver },
  ];

  const audioElements = React.useRef({});


  const toggleAudio = (title) => {
    const audio = audioElements.current[title]; // Retrieve the audio element using the title
    if (audio && audio.paused) { // Check if audio exists and is paused
      audio.play();
    } else if (audio) { // Check if audio exists
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <div className="flex flex-wrap -mx-4">
      {cardData.map((card, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <div className="max-w-xs rounded-lg bg-gray-400 overflow-hidden shadow-lg" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.title}</div>
            </div>
            <div className="px-6 pt-4 pb-2 flex items-center justify-between">
              <span onClick={() => toggleAudio(card.title)} className="inline-block cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <PauseIcon />
              </span>
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <div className="flex items-center justify-center">
                  <input type='range' />
                </div>
              </span>
            </div>
            <audio ref={(audio) => (audioElements.current[card.title] = audio)}>
              <source src={card.audioSrc} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
