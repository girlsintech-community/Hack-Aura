import React, { useState } from "react";
import "./Tickets.css";
import { Info } from "lucide-react";
import Navbar from "./Navbar";

const houses = [
  {
    name: "NOVA House",
    description:"They look beyond the horizon; catching sight of the future while the rest are still lost in today. Code the future before it arrives.",
    cover: "/images/houses/blue.png",
    video: "/images/houses/blue.mp4", // replace with actual promo video
    download: "/images/houses/NOVA.png"
  },
  {
    name: "LUNO House",
    description:"hello",
    cover: "/images/houses/green.png",
    video: "/images/houses/green.mp4",
    download: "/images/houses/LUNO.png"
  },
  {
    name: "ASTRA House",
    description:"hello",
    cover: "/images/houses/pink.png",
    video: "/images/houses/pink.mp4",
    download: "/images/houses/ASTRA.png"
  },
  {
    name: "NYX House",
    description:"hello",
    cover: "/images/houses/yellow.png",
    video: "/images/houses/yellow.mp4",
    download: "/images/houses/NYX.png"
  }
];

const Tickets = () => {
  const [flipped, setFlipped] = useState(Array(houses.length).fill(false));

  const toggleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <>
      <Navbar />
      <div className="tickets-page">
        <h1 className="tickets-title">HACKAURA HOUSES</h1>
        <div className="tickets-grid">
          {houses.map((house, idx) => (
            <div
            key={idx}
            className={`ticket-card ${flipped[idx] ? "flipped" : ""}`}
          >
            {/* Front side */}
            <div className="card-front">
              <img src={house.cover} alt={house.name} className="card-cover" />
              <div className="front-overlay">
                <a
                  href={house.download}
                  download
                  className="download-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  Download
                </a>
                <div className="info-container">
                <button
                  className="info-btn"
                  onClick={() => toggleFlip(idx)}
                >
                  <Info size={20} />
                  </button>
                  <div className="info-hover-panel">
    <span className="house-name">{house.name}</span>
    <span className="house-desc">{house.description}</span>
  </div>
  </div>
                
              </div>
            </div>

            {/* Back side */}
            <div className="card-back">
              <iframe
                src={house.video}
                title={house.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                className="back-btn"
                onClick={() => toggleFlip(idx)}
              >
                Flip Back
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Tickets;
