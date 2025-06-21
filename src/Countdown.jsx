import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-04T00:00:00"); // set your hackathon date
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <h2 className="countdown-title">Countdown</h2>
      <div className="countdown-grid">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div className="countdown-box" key={unit}>
            <span className="countdown-value">{value}</span>
            <span className="countdown-label">{unit.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
