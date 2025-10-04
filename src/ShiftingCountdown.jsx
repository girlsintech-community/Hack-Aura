import React, { useEffect, useRef, useState } from "react";
import { useAnimate } from 'framer-motion';
import "./ShiftingCountdown.css";

const COUNTDOWN_FROM = "2025-10-04T10:00:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function ShiftingCountdown() {
  return (
    <section className="countdown-wrapper">
      <h2 className="countdown-title">HACKAURA IS LIVE! COUNTDOWN TO THE FINALE</h2>
      <div className="countdown-container">
        <CountdownItem unit="Day" label="Days" />
        <CountdownItem unit="Hour" label="Hours" />
        <CountdownItem unit="Minute" label="Minutes" />
        <CountdownItem unit="Second" label="Seconds" />
      </div>
    </section>
  );
}

function CountdownItem({ unit, label }) {
  const { ref, time } = useTimer(unit);
  const display = unit === "Second" ? String(time).padStart(2, '0') : time;

  return (
    <div className="countdown-item">
      <div className="digit-box">
        <span ref={ref} className="digit">
          {display}
        </span>
      </div>
      <span className="label">{label}</span>
      <div className="underline"></div>
    </div>
  );
}

function useTimer(unit) {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    handleCountdown();
    intervalRef.current = setInterval(handleCountdown, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = end - now;

    let newTime = 0;
    switch (unit) {
      case "Day":
        newTime = Math.max(0, Math.floor(distance / DAY));
        break;
      case "Hour":
        newTime = Math.max(0, Math.floor((distance % DAY) / HOUR));
        break;
      case "Minute":
        newTime = Math.max(0, Math.floor((distance % HOUR) / MINUTE));
        break;
      default:
        newTime = Math.max(0, Math.floor((distance % MINUTE) / SECOND));
    }

    if (newTime !== timeRef.current) {
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
}
