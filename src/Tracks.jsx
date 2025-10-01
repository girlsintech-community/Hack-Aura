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
      prize: 'AI',
      link:'https://docs.google.com/document/d/1sQXHEzf3A5b7DyUKsqhRrXG8JAq-y-qEsoBLAK6iRSg/edit?usp=sharing'
    },
    {
      title: 'Blockchain',
      desc: 'Build transparent, trustless applications with secure smart contracts.',
      prize: 'Blockchain',
      link:'https://docs.google.com/document/d/1tl7KIRRFEVYUo1tOTCCRKTTH5urKU8Qf3xSN2OLOd58/edit?tab=t.0'
    },
    {
      title: 'Open Innovation',
      desc: 'Collaborate and solve real-world problems through cross-discipline ideas.',
      prize: 'Open Innovation',
      link:'https://docs.google.com/document/d/1h_Ul5vHD-hFxw0_CQ6j_4bPybG4C7BlF-1lLL4fUvp8/edit?tab=t.0'
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
              <div className="flip-hint">Problem Statements and Prizes</div>
            </div>
            <div className="card1-face card1-back">
              <h3 className="card1-title">{item.prize}</h3> 
               <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flip-btn"
              >
                Click here to View
              </a>
              <div className="flip-hint">Click to return</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollingGallery;