import React, { useEffect, useRef, useState } from 'react';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
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

  const allTeam = [
  { name: "Aakanksha Singh", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/aakanksha-singh1/", image: '/images/teams/tech/aakanksha.webp', location: "Mumbai" },
  { name: "Aarushi Chottani", role: "Content Writing Team", department: "Content", linkedin: "www.linkedin.com/in/aarushi-chottani-80b861322", image: '/images/teams/content/aarushi.webp', location: "Pune" },
  { name: "Aditi Madhukar", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/aditimadhukar/", image: '/images/teams/discord/aditi.webp', location: "Delhi" },
  { name: "Adyasha Das", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/adyashadas04", image: '/images/teams/tech/adyasha1.webp', location: "Bhubaneshwar" },
  { name: "Alina Abreeq", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/alina-abreeq", image: '/images/teams/design/Abreeq.webp', location: "Hyderabad" },
  { name: "Ananya Agarwal", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ananya-agarwal-861317290/", image: '/images/teams/design/ananya.webp', location: "Mumbai" },
  { name: "Ankita Kuntal", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ankita-kuntal", image: '/images/teams/design/ankita.webp', location: "Srinagar" },
  { name: "Archana", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/archana-gupta2006", image: '/images/teams/design/archana1.webp', location: "Delhi" },
  { name: "Avya Giri", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/avya-giri-919842320", image: '/images/teams/discord/avya.webp', location: "Delhi" },
  { name: "Bagavati Narayanan", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/bagavati-narayanan-98484b292", image: '/images/teams/tech/bagavati.webp', location: "Chennai" },
  { name: "Charmi Reddy P", role: "Content Writing Team", department: "Content", linkedin: "https://www.linkedin.com/in/charmi-reddy-p-b2aaa2294", image: '/images/teams/content/charmi.webp', location: "Hyderabad" },
  { name: "Dhairya Kanabar", role: "PR Team", department: "PR", linkedin: "https://www.linkedin.com/in/dhairya-kanabar-411990294", image: '/images/teams/pr/dhairya.webp', location: "Surendranagar" },
  { name: "Gungun Goel", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://www.linkedin.com/in/gungun-goyal-05154426a", image: '/images/teams/partnerships/gungun.webp', location: "Meerut" },
  { name: "Ishita Soni", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ishita-soni-work", image: '/images/teams/design/ishita.webp', location: "Jaipur" },
  { name: "Kashika Gupta", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/kashikagupta", image: '/images/teams/tech/kashika1.webp', location: "Indore" },
  { name: "Kashish Mahendra Sonawane", role: "PR Team", department: "PR", linkedin: "http://www.linkedin.com/in/kashish-sonawane-41923a326", image: '/images/teams/pr/kashish.webp', location: "Nashik" },
  { name: "Lakshya S", role: "PR Team", department: "PR", linkedin: "https://www.linkedin.com/in/lakshya-sasikumar-7bb659342/", image: '/images/teams/pr/lakshya.webp', location: "Chennai" },
  { name: "Mahak", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://www.linkedin.com/in/documentdiarieswithmahak/", image: '/images/teams/partnerships/mahak.webp', location: "Delhi" },
  { name: "Pathan Sama Khan", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/sama-khan-628959281", image: '/images/teams/speaker/pathan.webp', location: "Hyderabad" },
  { name: "Sanwedana Lokhande", role: "Content Writing Team", department: "Content", linkedin: "https://www.linkedin.com/in/sanwedana-lokhande-35332a33a/", image: '/images/teams/content/sanwedana.webp', location: "Nagpur" },
  { name: "Simran Nagekar", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/simransn", image: '/images/teams/discord/simran.webp', location: "Bengaluru" },
    { name: "Vijay Laxmi", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/laxmi-vijay/", image: '/images/teams/speaker/vijay1.jpg', location: "Delhi" }
  ];

  const manik = {
    name: "Manik",
    role: "Lead Organizer",
    department: "Core",
    linkedin: "https://www.linkedin.com/in/mrmanik",
    image: '/images/teams/manik.jpg',
    location: "Haryana"
  };

  const organizingTeam = allTeam.sort((a, b) => a.name.localeCompare(b.name));

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

  const [activeCard, setActiveCard] = useState(null);
  // For mobile: toggle info on tap
  const handleCardClick = (idx) => {
    if (!isMobile) return;
    setActiveCard(activeCard === idx ? null : idx);
  };

  const TeamCard = ({ member, index = 0 }) => {
    // Determine if info should be shown
    const showInfo = isMobile ? activeCard === index : false;
    return (
      <div
        className={`team-card animate-on-scroll${showInfo ? ' show-info' : ''}`}
        style={{ animationDelay: `${index * 150}ms` }}
        onClick={() => handleCardClick(index)}
      >
        <div className="image-container">
          <img
            src={member.image || '/default-avatar.png'}
            alt={member.name}
            className="team-member-image"
          />
          {/* Info panel overlays image, hidden by default, shown on hover/tap */}
            <div className="info-panel">
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '100%'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%'}}>
                  <span style={{ fontSize: '17px', fontWeight: 700, color: '#10b981', letterSpacing: '0.02em', textAlign: 'center', width: '100%' }}>{member.department}</span>
                  {member.linkedin && (
                    <a
                      href={
                        member.linkedin.startsWith('http')
                          ? member.linkedin
                          : `https://www.linkedin.com/in/${member.linkedin}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-card-linkedin"
                      style={{margin: '0 auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '6px 14px', borderRadius: '50px', background: 'rgba(16,185,129,0.13)', border: '1.5px solid #10b981', color: '#10b981', fontWeight: 600, fontSize: '15px', boxShadow: '0 2px 8px rgba(16,185,129,0.08)', transition: 'all 0.2s'}} 
                      onClick={e => e.stopPropagation()}
                    >
                      <Linkedin size={18} style={{marginRight: '6px'}} />
                      <span style={{fontSize: '15px'}}>LinkedIn</span>
                    </a>
                  )}
                </div>
                <span className="location" style={{margin: 0, display: 'flex', alignItems: 'center', gap: '7px', color: '#e2e8f0', fontSize: '15px', fontWeight: 500, justifyContent: 'center'}}>
                  <MapPin size={16} />
                  {member.location}
                </span>
              </div>
            </div>
        </div>
        {/* Department header always visible at top */}
        <div className="name-header" style={{ height: '40px', padding: '0.5rem' }}>
          <p style={{ 
            margin: 0,
            fontSize: '15px',
            textAlign: 'center',
            width: '100%'
          }}>
              {member.name}
          </p>
        </div>
      </div>
    );
  };

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
        <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ maxWidth: 320, width: '100%' }}>
            <div className="team-card-wrapper">
              <TeamCard member={manik} index={999} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;