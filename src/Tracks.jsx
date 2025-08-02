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
      <h1 className="rolling-gallery-heading">Tracks</h1>
      <div className="cards-grid">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`card ${flippedCards.includes(index) ? 'flipped' : ''}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="card-face card-front">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
              <div className="flip-hint">Click to see prizes</div>
            </div>
            <div className="card-face card-back">
              <h3 className="card-title">{item.title} Prizes</h3>
              <p className="card-prize">{item.prize}</p>
              <div className="flip-hint">Click to return</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollingGallery;