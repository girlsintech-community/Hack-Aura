import React, { useEffect, useState } from 'react';
import './Countdown.css';

const FlipUnit = ({ value, label }) => {
  const [prevValue, setPrevValue] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setFlipping(true);
      const timer = setTimeout(() => {
        setFlipping(false);
        setPrevValue(value);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <div className="flip-unit">
      <div className="flip-card">
        <div className="top-half">{value}</div>
        <div className="bottom-half">{value}</div>
        

        {flipping && (
          <>
            <div className="flip-top-half">{prevValue}</div>
            <div className="flip-bottom-half">{value}</div>
          </>
        )}
      </div>
      <span className="label">{label}</span>
    </div>
  );
};

const Countdown = () => {
  const calculateTimeLeft = () => {
    const target = new Date('2025-10-04T00:00:00');
    const now = new Date();
    const diff = target - now;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="countdown-wrapper">
    <h2 className="countdown-heading">COUNTDOWN TO HACKATHON</h2>
    <div className="countdown-container single-row">
      <FlipUnit value={String(timeLeft.days).padStart(2, '0')} label="Days" />
      <FlipUnit value={String(timeLeft.hours).padStart(2, '0')} label="Hours" />
      <FlipUnit value={String(timeLeft.minutes).padStart(2, '0')} label="Minutes" />
      <FlipUnit value={String(timeLeft.seconds).padStart(2, '0')} label="Seconds" />
    </div>
  </div>
  );
};

export default Countdown;
