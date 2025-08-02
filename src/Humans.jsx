import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, MapPin } from 'lucide-react';
import './Humans.css'; // Import the CSS file

const TeamPage = ({ onContactClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const organizingTeam = [
    { name: "Aarushi Chottani", role: "Content Writing Team", department: "Content", linkedin: "www.linkedin.com/in/aarushi-chottani-80b861322", image: '/images/teams/content/aarushi.png', location: "Pune" },
    { name: "Aditi Madhukar", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/aditimadhukar/", image: '/images/teams/discord/aditi.jpg', location: "Delhi" },
    { name: "Adyasha Das", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/adyashadas04", image: '/images/teams/tech/adyasha1.png', location: "Bhubaneshwar" },
    { name: "Alina Abreeq", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/alina-abreeq", image: '/images/teams/design/Abreeq.png', location: "Hyderabad" },
    { name: "Ananya Agarwal", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ananya-agarwal-861317290/", image: '/images/teams/design/ananya.png', location: "Mumbai" },
    { name: "Ankita Kuntal", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ankita-kuntal", image: '/images/teams/design/ankita.png', location: "Srinagar" },
    { name: "Archana", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/archana-gupta2006", image: '/images/teams/design/archana1.jpg', location: "Delhi" },
    { name: "Avya Giri", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/avya-giri-919842320", image: '/images/teams/discord/avya.png', location: "Delhi" },
    { name: "Bagavati Narayanan", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/bagavati-narayanan-98484b292", image: '/images/teams/tech/bagavati.jpg', location: "Chennai" },
    { name: "Bhargavi Gangoor", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/bhargavi-gangoor-857b9b294", image: '/images/teams/host/bhargavi.jpg', location: "Bengaluru" },
    { name: "Charmi Reddy P", role: "Content Writing Team", department: "Content", linkedin: "https://www.linkedin.com/in/charmi-reddy-p-b2aaa2294", image: '/images/teams/content/charmi.png', location: "Hyderabad" },
    { name: "Dhairya Kanabar", role: "PR Team", department: "PR", linkedin: "https://www.linkedin.com/in/dhairya-kanabar-411990294", image: '/images/teams/pr/dhairiya.jpg', location: "Surendranagar" },
    { name: "Gungun Goel", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://www.linkedin.com/in/gungun-goyal-05154426a", image: '/images/teams/partnerships/gungun.png', location: "Meerut" },
    { name: "Ishita Soni", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ishita-soni-work", image: '/images/teams/design/ishita.png', location: "Jaipur" },
    { name: "Kashika Gupta", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/kashikagupta", image: '/images/teams/tech/kashika1.png', location: "Indore" },
    { name: "Kashish Mahendra Sonawane", role: "PR Team", department: "PR", linkedin: "http://www.linkedin.com/in/kashish-sonawane-41923a326", image: '/images/teams/pr/kashish.jpeg', location: "Nashik" },
    { name: "Kashvi Arora", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://in.linkedin.com/in/kashvi15", image: '/images/teams/partnerships/kashvi.jpg', location: "Delhi" },
    { name: "Lakshya S", role: "PR Team", department: "PR", linkedin: "https://www.linkedin.com/in/lakshya-sasikumar-7bb659342/", image: '/images/teams/pr/lakshya.jpeg', location: "Chennai" },
    { name: "Mahak", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://www.linkedin.com/in/documentdiarieswithmahak/", image: '/images/teams/partnerships/mahak.png', location: "Delhi" },
    { name: "Manik", role: "Lead Organizer", department: "Core", linkedin: "https://www.linkedin.com/in/mrmanik", image: '/images/teams/manik.jpg', location: "Haryana" },
    { name: "Pathan Sama Khan", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/sama-khan-628959281", image: '/images/teams/speaker/pathan.jpg', location: "Hyderabad" },
    { name: "Sanwedana Lokhande", role: "Content Writing Team", department: "Content", linkedin: "https://www.linkedin.com/in/sanwedana-lokhande-35332a33a/", image: '/images/teams/content/sanwedana.jpg', location: "Nagpur" },
    { name: "Simran Nagekar", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/simransn", image: '/images/teams/discord/simran.png', location: "Bengaluru" },
    { name: "Vijay Laxmi", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/laxmi-vijay/", image: '/images/teams/speaker/vijay1.jpg', location: "Delhi" }
  ].sort((a, b) => a.name.localeCompare(b.name));

  const observerRef = useRef();
  const elementsRef = useRef([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observerRef.current.observe(el);
      elementsRef.current.push(el);
    });

    return () => {
      if (observerRef.current) {
        elementsRef.current.forEach((el) => {
          observerRef.current.unobserve(el);
        });
      }
    };
  }, [isMobile]);

  const TeamCard = ({ member, index = 0 }) => (
    <div
      className="team-card animate-on-scroll"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="image-container">
        <img
          src={member.image || '/default-avatar.png'}
          alt={member.name}
          className="team-member-image"
        />
      </div>
      <div className="name-header" style={{ height: '40px', padding: '0.5rem' }}>
        <p style={{ 
          margin: 0,
          fontSize: '15px',
          textAlign: 'left',
          width: '100%'
        }}>
          {member.department}
        </p>
      </div>
      <div className="info-panel">
        <div style={{display: 'flex'}}>
          <h3 style={{ fontSize: '15px' }}>{member.name}</h3>
          {member.linkedin && (
            <a
              href={
                member.linkedin.startsWith('http')
                  ? member.linkedin
                  : `https://www.linkedin.com/in/${member.linkedin}`
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{height: '10px', marginLeft: '15px'}}
            >
              <Linkedin size={15} />
            </a>
          )}
        </div>
        <p className="location"><MapPin size={14} /> {member.location}</p>
      </div>
    </div>
  );

  return (
    <div className="team-page">
      <div className="team-container">
        <div className="page-header">
          <h1 className="page-title">Humans of Hack Aura</h1>
          <p className="page-description">
            Meet the incredible team behind Hack Aura - passionate individuals dedicated to creating
            an unforgettable hackathon experience for innovators and creators.
          </p>
          <div className="page-divider"></div>
        </div>

        <div className="team-grid">
          {organizingTeam.map((member, index) => (
            <div key={index} className="team-card-wrapper">
              <TeamCard member={member} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;