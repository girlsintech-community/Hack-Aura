import React, { useState } from 'react';
import './Tracks.css'; // We'll update this CSS file

const RollingGallery = () => {
  const [flippedCards, setFlippedCards] = useState([]);

  const toggleFlip = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const items = [
    {
      title: 'AI',
      desc: 'Create smart, adaptive tools using neural networks and deep learning.',
      prize: 'Prizes to be announced'
    },
    {
      title: 'Blockchain',
      desc: 'Build transparent, trustless applications with secure smart contracts.',
      prize: 'Prizes to be announced'
    },
    {
      title: 'Open Innovation',
      desc: 'Collaborate and solve real-world problems through cross-discipline ideas.',
      prize: 'Prizes to be announced'
    }
  ];

  return (
    <div className="cards-container">
      <h2 className="rolling-gallery-heading">TRACKS</h2>
      <div className="cards-grid">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`card1 ${flippedCards.includes(index) ? 'flipped' : ''}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="card1-face card1-front">
              <h3 className="card1-title">{item.title}</h3>
              <p className="card1-desc">{item.desc}</p>
              <div className="flip-hint">Click to see prizes</div>
            </div>
            <div className="card1-face card1-back">
              <h3 className="card1-title">{item.title} Prizes</h3>
              <p className="card1-prize">{item.prize}</p>
              <div className="flip-hint">Click to return</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollingGallery;