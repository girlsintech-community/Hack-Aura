import React, { useState } from "react";
import "./Tickets.css";
import { Info } from "lucide-react";

const houses = [
  {
    name: "Aqua House",
    cover: "/images/houses/blue.png",
    video: "/images/houses/blue.mp4", // replace with actual promo video
    download: "/tickets/aqua_ticket.pdf"
  },
  {
    name: "Terra House",
    cover: "/images/houses/green.png",
    video: "/images/houses/green.mp4",
    download: "/tickets/terra_ticket.pdf"
  },
  {
    name: "Ignis House",
    cover: "/images/houses/pink.png",
    video: "/images/houses/pink.mp4",
    download: "/tickets/ignis_ticket.pdf"
  },
  {
    name: "Ventus House",
    cover: "/images/houses/yellow.png",
    video: "/images/houses/yellow.mp4",
    download: "/tickets/ventus_ticket.pdf"
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
    <div className="tickets-page">
      <h1 className="tickets-title">House Tickets</h1>
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
                <button
                  className="info-btn"
                  onClick={() => toggleFlip(idx)}
                >
                  <Info size={20} />
                </button>
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
                Back
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
