import React, { useEffect, useState, useRef } from "react";
import "./ShootingStars.css";

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0: return { x: offset, y: 0, angle: 45 };
    case 1: return { x: window.innerWidth, y: offset, angle: 135 };
    case 2: return { x: offset, y: window.innerHeight, angle: 225 };
    case 3: return { x: 0, y: offset, angle: 315 };
    default: return { x: 0, y: 0, angle: 45 };
  }
};

const ShootingStars = () => {
  const [star, setStar] = useState(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: 10,
        distance: 0,
      };
      setStar(newStar);

      const randomDelay = Math.random() * (4000 - 1500) + 1500;
      setTimeout(createStar, randomDelay);
    };

    createStar();
  }, []);

  useEffect(() => {
    const moveStar = () => {
      setStar((prev) => {
        if (!prev) return null;
        const rad = (prev.angle * Math.PI) / 180;
        const newX = prev.x + prev.speed * Math.cos(rad);
        const newY = prev.y + prev.speed * Math.sin(rad);
        const newDist = prev.distance + prev.speed;

        if (
          newX < -50 || newX > window.innerWidth + 50 ||
          newY < -50 || newY > window.innerHeight + 50
        ) return null;

        return { ...prev, x: newX, y: newY, distance: newDist, scale: 1 + newDist / 100 };
      });
      requestAnimationFrame(moveStar);
    };

    if (star) requestAnimationFrame(moveStar);
  }, [star]);

  return (
    <svg ref={svgRef} className="shooting-stars-svg">
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={10 * star.scale}
          height={2}
          fill="url(#star-gradient)"
          transform={`rotate(${star.angle}, ${star.x}, ${star.y})`}
        />
      )}
      <defs>
        <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2EB9DF" stopOpacity="0" />
          <stop offset="100%" stopColor="#9E00FF" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ShootingStars;
