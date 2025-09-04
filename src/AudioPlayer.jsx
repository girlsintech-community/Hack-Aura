import React, { useRef, useEffect, useState } from 'react';
import './AudioPlayer.css';

import pauseIcon from './assets/pause.png';
import playIcon from './assets/play.png';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Start paused

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.pause(); // Always start paused
    }
  }, []);

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
    }
  };

  return (
    <div className="audio-player-global">
      <audio ref={audioRef} src="/Hack Aura.mp3" loop preload="auto" />
      {isPlaying ? (
        <button className="audio-btn-img" onClick={handlePause} title="Pause">
          <img src={pauseIcon} alt="Pause" />
        </button>
      ) : (
        <button className="audio-btn-img" onClick={handlePlay} title="Play">
          <img src={playIcon} alt="Play" />
        </button>
      )}
    </div>
  );
};

export default AudioPlayer;
