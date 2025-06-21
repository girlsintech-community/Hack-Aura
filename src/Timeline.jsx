import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    month: "July",
    title: "Announcement & Pre-Hackathon Session",
    color: "var(--aurora-green)",
  },
  {
    month: "August",
    title: "Hack Learning Weeks",
    color: "var(--aurora-blue)",
  },
  {
    month: "September",
    title: "Hack Learning Weeks",
    color: "var(--aurora-purple)",
  },
  {
    month: "October",
    title: "Hackathon!",
    color: "#ff7edb", // pinkish aurora tone
  },
];

const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <h2 className="timeline-title">Event Timeline</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">

            <div classname="timeline-item">
            <div
              className="timeline-dot"
              style={{ backgroundColor: item.color }}
            ></div>
            <div className="timeline-content">
              <h3>{item.month}</h3>
              <p>{item.title}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
