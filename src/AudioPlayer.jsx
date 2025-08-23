import React, { useRef, useEffect, useState } from 'react';
import './AudioPlayer.css';

import pauseIcon from './assets/pause.png';
import playIcon from './assets/play.png';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showMsg, setShowMsg] = useState(true);
  const [msgShownOnce, setMsgShownOnce] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If autoplay fails, try on first user interaction
          const tryPlay = () => {
            audio.play();
            window.removeEventListener('click', tryPlay);
            window.removeEventListener('keydown', tryPlay);
          };
          window.addEventListener('click', tryPlay);
          window.addEventListener('keydown', tryPlay);
        });
      }
    }
  }, []);

  // Show message for 5 seconds on first load, then never again
  useEffect(() => {
    let timer;
    if (isPlaying && !msgShownOnce && showMsg) {
      timer = setTimeout(() => {
        setShowMsg(false);
        setMsgShownOnce(true);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, msgShownOnce, showMsg]);

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      // Only show message if never shown before
      if (!msgShownOnce) setShowMsg(true);
    }
  };

  return (
    <div className="audio-player-global">
      <audio ref={audioRef} src="/Hack Aura.mp3" autoPlay loop preload="auto" />
      {showMsg && isPlaying ? (
        <div className="uiverse-stealth-msg">
          <strong>Turn up your volume for the vibe!</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      ) : (
        isPlaying ? (
          <button className="audio-btn-img" onClick={handlePause} title="Pause">
            <img src={pauseIcon} alt="Pause" />
          </button>
        ) : (
          <button className="audio-btn-img" onClick={handlePlay} title="Play">
            <img src={playIcon} alt="Play" />
          </button>
        )
      )}
    </div>
  );
};

export default AudioPlayer;
