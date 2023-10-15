/**
 * Nature Sounds Player Component
 *
 * This component allows users to play and control various nature sounds. It provides
 * a list of sound cards with play/pause functionality and volume control for each
 * sound. Users can interact with the cards to play and adjust the volume of the
 * selected nature sound.
 *
 * @version 1.0.0
 * @date September 25, 2023
 */

import React, { useRef, useState, useEffect } from 'react';
import PlayIcon from './PlayIcon';
import PauseIcon from './PauseIcon';

import campfireAudio from '../data/nature_sounds/campfire-crackling.mp3';
import calmRiverAudio from '../data/nature_sounds/calm-river.mp3';
import chimesAudio from '../data/nature_sounds/chimes-bells.mp3';
import eveningBirdsAudio from '../data/nature_sounds/evening-birds.mp3';
import lightningThunderAudio from '../data/nature_sounds/lighting-thunder.mp3';
import natureRelaxBirdsAudio from '../data/nature_sounds/nature-relax-birds.mp3';
import nightFieldCricketAudio from '../data/nature_sounds/night-field-cricket.mp3';
import rainAmbientAudio from '../data/nature_sounds/rain-ambient.mp3';
import smallWavesAudio from '../data/nature_sounds/small-waves.mp3';
import softPianoAudio from '../data/nature_sounds/soft-piano.mp3';
import whiteNoiseAudio from '../data/nature_sounds/white-noise.mp3';
import windOutsideAudio from '../data/nature_sounds/wind-outside.mp3';

const audioData = [
  { title: 'Evening Birds', audioSrc: eveningBirdsAudio },
  { title: 'Campfire Crackling', audioSrc: campfireAudio },
  { title: 'Wind Outside', audioSrc: windOutsideAudio },
  { title: 'Small Waves', audioSrc: smallWavesAudio },
  { title: 'White Noise', audioSrc: whiteNoiseAudio },
  { title: 'Rain Ambient', audioSrc: rainAmbientAudio },
  { title: 'Nature Relax: Birds', audioSrc: natureRelaxBirdsAudio },
  { title: 'Lightning & Thunder', audioSrc: lightningThunderAudio },
  { title: 'Chimes Bells', audioSrc: chimesAudio },
  { title: 'Night Field Cricket', audioSrc: nightFieldCricketAudio },
  { title: 'Soft Piano', audioSrc: softPianoAudio },
  { title: 'Calm River', audioSrc: calmRiverAudio },
];

const Cards = () => {
  const [isPlaying, setIsPlaying] = useState({});
  const [volume, setVolume] = useState({});
  const audioElements = useRef({});


  /**
   * Toggle Audio Playback
   *
   * Toggles the playback state (play/pause) of a specific audio element.
   * Updates the `isPlaying` state to reflect the current playback status.
   *
   * @param {string} title - The title of the audio track to be toggled.
  */
  const toggleAudio = (title) => {
    const audio = audioElements.current[title];
    if (audio && audio.paused) {
      audio.play();
      setIsPlaying((prevIsPlaying) => ({ ...prevIsPlaying, [title]: true }));
    } else if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying((prevIsPlaying) => ({ ...prevIsPlaying, [title]: false }));
    }
  };

  /**
   * Handle Volume Change
   *
   * Adjusts the volume level of a specific audio element.
   * Updates the `volume` state to reflect the new volume level.
   *
   * @param {string} title - The title of the audio track to adjust the volume for.
   * @param {number} newVolume - The new volume level (between 0 and 1).
   */
  const handleVolumeChange = (title, newVolume) => {
    const audio = audioElements.current[title];
    if (audio) {
      audio.volume = newVolume;
      setVolume((prevVolume) => ({ ...prevVolume, [title]: newVolume }));
    }
  };

  /**
   * Initialize Volume State
   *
   * Sets the initial volume state for each audio element when the component mounts.
   * Initializes the `volume` state with default volume levels.
   */
  useEffect(() => {
    const initialVolume = {};
    audioData.forEach((card) => {
      initialVolume[card.title] = 0.5;
    });
    setVolume(initialVolume);
  }, []);

  return (
    <div className="flex flex-wrap -mx-4">
      {audioData.map((card, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <div className="max-w-xs rounded-lg bg-gray-400 overflow-hidden shadow-lg" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.title}</div>
            </div>
            <div className="px-6 pt-4 pb-2 flex items-center justify-between">
              <span onClick={() => toggleAudio(card.title)} className="inline-block cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {isPlaying[card.title] ? <PauseIcon /> : <PlayIcon />}
              </span>
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <div className="flex items-center justify-center">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume[card.title] || 0}
                    onChange={(e) => handleVolumeChange(card.title, parseFloat(e.target.value))}
                    name={`volume-${card.title}`}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </span>
            </div>
            <audio ref={(audio) => (audioElements.current[card.title] = audio)} loop={true}>
              <source src={card.audioSrc} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
