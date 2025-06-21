// import React from 'react';
// import './Timeline.css';

// const timelineData = [
//   {
//     month: "July",
//     title: "Announcement & Pre-Hackathon Session",
//     color: "var(--aurora-green)",
//   },
//   {
//     month: "August",
//     title: "Hack Learning Weeks",
//     color: "var(--aurora-blue)",
//   },
//   {
//     month: "September",
//     title: "Hack Learning Weeks",
//     color: "var(--aurora-purple)",
//   },
//   {
//     month: "October",
//     title: "Hackathon!",
//     color: "#ff7edb", // pinkish aurora tone
//   },
// ];

// const Timeline = () => {
//   return (
//     <section className="timeline-section" id="timeline">
//       <h2 className="timeline-title">Event Timeline</h2>
//       <div className="timeline-container">
//         {timelineData.map((item, index) => (
//           <div key={index} className="timeline-item">

//             <div classname="timeline-item">
//             <div
//               className="timeline-dot"
//               style={{ backgroundColor: item.color }}
//             ></div>
//             <div className="timeline-content">
//               <h3>{item.month}</h3>
//               <p>{item.title}</p>
//             </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Timeline;
import React, { useEffect, useRef } from 'react';
import './timeline.css';

const timelineEvents = [
  { month: 'July', details: 'Announcement + Pre-hackathon session' },
  { month: 'August', details: 'Hack Learning Weeks' },
  { month: 'September', details: 'Hack Learning Weeks Continue' },
  { month: 'October', details: 'Main Hackathon Event' },
];

const Timeline = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const items = containerRef.current.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="timeline-section" id="timeline">
      <h2 className="timeline-title">Timeline</h2>
      <div className="timeline-container" ref={containerRef}>
        {timelineEvents.map((event, index) => (
          <div className="timeline-item hidden" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{event.month}</h3>
              <p>{event.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
