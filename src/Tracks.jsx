import React from 'react';
import './Tracks.css';

const tracks = [
  {
    title: 'Web3',
    description: 'Build decentralized apps, explore blockchain protocols, and shape the future of the internet.',
  },
  {
    title: 'AI',
    description: 'Create intelligent systems, push boundaries in machine learning, and innovate with data.',
  },
  {
    title: 'Open Innovation',
    description: 'Break silos, experiment freely, and build solutions that span industries and ideas.',
  },
];

const HackathonTracks = () => {
  return (
    <section className="tracks-section">
      <h2 className="tracks-title">Hackathon Tracks</h2>
      <div className="track-cards-container">
        {tracks.map((track, index) => (
          <div className="track-card" key={index}>
            <h3 className="track-name">{track.title}</h3>
            <p className="track-desc">{track.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HackathonTracks;
