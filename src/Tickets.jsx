import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Tickets.css";
import { Info } from "lucide-react";
import Navbar from "./Navbar";
import ContactPopup from "./Contact"; // <-- import it

const houses = [
  {
    name: "NOVA House",
    description:
      "They look beyond the horizon; catching sight of the future while the rest are still lost in today. 'Code the future before it arrives.'",
    cover: "/images/houses/blue.png",
    video: "/images/houses/blue.mp4",
    ticket_link: "https://drive.google.com/uc?export=download&id=1IJsq_DuhniMIOcuX5J0yUywT9qLRuQTw",
  },
  {
    name: "LUNO House",
    description:
      "They do not merely write code; they transform it. What begins as simple logic leaves their hands as something rare. 'Turn code into gold.'",
    cover: "/images/houses/green.png",
    video: "/images/houses/green.mp4",
    ticket_link: "https://drive.google.com/uc?export=download&id=1Nb-StzbIq1HBQS3DTQcBxEftXzPCNKZi",
  },
  {
    name: "ASTRA House",
    description:
      "They thrive where others falter; stepping into chaos and returning with order, as if they had tamed the storm itself. 'Code clarity from chaos.'",
    cover: "/images/houses/pink.png",
    video: "/images/houses/pink.mp4",
    ticket_link: "https://drive.google.com/uc?export=download&id=1CiCn_sLJY7Zr0sxGj9i42dXZ9IdwF05I",
  },
  {
    name: "NYX House",
    description:
      "Here, the rules blur; endings become beginnings, and code dares to go where reason hesitates. 'Where logic ends, code begins.'",
    cover: "/images/houses/yellow.png",
    video: "/images/houses/yellow.mp4",
    ticket_link: "https://drive.google.com/uc?export=download&id=1zsPhuTUhkryG0qDKLrBG4smpPZQ9EOLD",
  },
];



const Tickets = () => {
  const [flipped, setFlipped] = useState(Array(houses.length).fill(false));
  const [showPopup, setShowPopup] = useState(true); // Show on load
  const [popupMode, setPopupMode] = useState("join"); // Always join for ticket
  const [userInfo, setUserInfo] = useState(null); // { name, email }
  const [selectedHouse, setSelectedHouse] = useState(null); // index of selected house

  const toggleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  // When user submits the popup form
  const handlePopupSubmit = (info) => {
    setUserInfo(info);
    setShowPopup(false);
  };

  // When user selects a ticket (house)
  const handleTicketSelect = async (idx) => {
    setSelectedHouse(idx);
    if (userInfo && userInfo.email) {
      const house = houses[idx];
      // EmailJS config from .env
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      // Prepare template params
      const templateParams = {
        to_name: userInfo.name,
        house_name: house.name,
        house_desc: house.description,
        ticket_link: house.ticket_link,
        to_email: userInfo.email,
      };
      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        alert("Ticket sent to " + userInfo.email + "! Check your inbox.");
      } catch (err) {
        alert("Failed to send ticket. Please try again later.");
        // Optionally log error
        // console.error(err);
      }
    }
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
              <div className="card-front">
                <div className="ticket-image-container">
                  <img src={house.cover} alt={house.name} className="card-cover" />
                </div>
                <div className="front-overlay">
                  <div className="ticket-info-panel">
                    <span className="house-name">{house.name}</span>
                    <span className="house-desc">{house.description}</span>
                  </div>
                  <button
                    className="download-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!userInfo) {
                        setShowPopup(true);
                        setPopupMode("join");
                      } else {
                        handleTicketSelect(idx);
                      }
                    }}
                  >
                    {userInfo ? "Get Ticket" : "Join Now"}
                  </button>
                  <div className="info-container">
                    <button
                      className="info-btn"
                      onClick={() => toggleFlip(idx)}
                    >
                      <Info size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-back">
                <iframe
                  src={house.video}
                  title={house.name}
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
                <button className="back-btn" onClick={() => toggleFlip(idx)}>
                  Flip Back
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <ContactPopup
          mode={popupMode}
          onClose={() => setShowPopup(false)}
          onSubmit={handlePopupSubmit}
        />
      )}
    </>
  );
};

export default Tickets;
