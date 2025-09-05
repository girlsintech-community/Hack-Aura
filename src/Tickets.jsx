import React, { useState } from "react";
import "./Tickets.css";
import { Info } from "lucide-react";
import Navbar from "./Navbar";

const houses = [
  {
    name: "NOVA House",
    description:"They look beyond the horizon; catching sight of the future while the rest are still lost in today. “Code the future before it arrives.”",
    cover: "/images/houses/blue.png",
    video: "/images/houses/blue.mp4", // replace with actual promo video
    download: "/images/houses/NOVA.png"
  },
  {
    name: "LUNO House",
    description:"They do not merely write code; they transform it. What begins as simple logic leaves their hands as something rare. “Turn code into gold.”",
    cover: "/images/houses/green.png",
    video: "/images/houses/green.mp4",
    download: "/images/houses/LUNO.png"
  },
  {
    name: "ASTRA House",
    description:"They thrive where others falter; stepping into chaos and returning with order, as if they had tamed the storm itself. “Code clarity from chaos.”",
    cover: "/images/houses/pink.png",
    video: "/images/houses/pink.mp4",
    download: "/images/houses/ASTRA.png"
  },
  {
    name: "NYX House",
    description:"Here, the rules blur; endings become beginnings, and code dares to go where reason hesitates. “Where logic ends, code begins.”",
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
              <div className="ticket-image-container">
                <img src={house.cover} alt={house.name} className="card-cover" />
              </div>
              <div className="front-overlay">
                <div className="ticket-info-panel">
                  <span className="house-name">{house.name}</span>
                  <span className="house-desc">{house.description}</span>
                </div>
                <a
                  href={house.download}
                  download
                  className="download-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  Join Now
                </a>
                <div className="info-container">Click here
                  <button
                    className="info-btn"
                    onClick={() => toggleFlip(idx)}
                  >
                    <Info size={20} />
                  </button>
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
