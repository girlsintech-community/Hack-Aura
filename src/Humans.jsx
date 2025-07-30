import React, { useEffect, useRef, useState } from 'react';
import {
  User, Award, Mic, Users, Gavel, Linkedin, BookText,
  Megaphone, Home, Handshake, MessageCircle, Brush
} from 'lucide-react';
import { MapPin } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Humans.css';
import Navbar from './Navbar';
import Footer from './Footer';

const TeamPage = ({ onContactClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if mobile on component mount and on resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    toast.info('👋 Meet our awesome organizers — hover on the cards to see their details!', {
      position: 'bottom-right',
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      style: {
        background: 'linear-gradient(135deg, #3b82f6, #10b981, #06b6d4)',
        color: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
        fontWeight: '500',
        fontSize: '0.95rem',
        padding: '0.85rem 1.2rem',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      },
      icon: '✨',
    });
  }, []);

  const organizingTeam = [
    { name: "Manik", role: "Lead Organizer", department: "Core", linkedin: "https://www.linkedin.com/in/mrmanik", image: '/images/teams/manik.jpg', location: "Haryana" },
    { name: "Bagavati Narayanan", role: "Tech Lead", department: "Tech", linkedin: "https://www.linkedin.com/in/bagavati-narayanan-98484b292", image: '/images/teams/tech/bagavati.jpg', location: "Chennai" },
    { name: "Kashika Gupta", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/kashikagupta", image: '/images/teams/tech/kashika1.png', location: "Indore" },
    { name: "Adyasha", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/adyashadas04", image: '/images/teams/tech/adyasha1.png', location: "Bhubaneshwar" },
    { name: "Archana", role: "Design Lead", department: "Design", linkedin: "https://www.linkedin.com/in/archana-gupta2006", image: '/images/teams/design/archana1.jpg', location: "Delhi" },
    { name: "Ananya Agarwal", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ananya-agarwal-861317290/", image: '/images/teams/design/ananya.png', location: "Mumbai" },
    { name: "Ankita Kuntal", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ankita-kuntal", image: '/images/teams/design/ankita.png', location: "Srinagar" },
    { name: "Alina Abreeq", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/alina-abreeq", image: '/images/teams/design/Abreeq.png', location: "Hyderabad" },
    { name: "Ishita Soni", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ishita-soni-work", image: '/images/teams/design/ishita.png', location: "Jaipur" },
    { name: "Aarushi Chottani", role: "Content Writing Lead", department: "Content", linkedin: "www.linkedin.com/in/aarushi-chottani-80b861322", image: '/images/teams/content/aarushi.png', location: "Pune" },
    { name: "Charmi Reddy P", role: "Content Writing Team", department: "Content", linkedin: "https://www.linkedin.com/in/charmi-reddy-p-b2aaa2294", image: '/images/teams/content/charmi.png', location: "Hyderabad" },
    { name: "Sanwedana Lokhande", role: "Content Writing Team", department: "Content", linkedin: "https://www.linkedin.com/in/sanwedana-lokhande-35332a33a/", image: '/images/teams/content/sanwedana.jpg', location: "Nagpur" },
    { name: "Lakshya S", role: "PR Team", department: "PR", linkedin: "https://www.linkedin.com/in/lakshya-sasikumar-7bb659342/", image: '/images/teams/pr/lakshya.jpeg', location: "Chennai" },
    { name: "Dhairya Kanabar", role: "PR Team", department: "PR", linkedin: "https://www.linkedin.com/in/dhairya-kanabar-411990294", image: '/images/teams/pr/dhairiya.jpg', location: "Surendranagar" },
    { name: "Kashish Mahendra Sonawane", role: "PR Team", department: "PR", linkedin: "http://www.linkedin.com/in/kashish-sonawane-41923a326", image: '/images/teams/pr/kashish.jpeg', location: "Nashik" },
    { name: "Gungun Goel", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://www.linkedin.com/in/gungun-goyal-05154426a", image: '/images/teams/partnerships/gungun.png', location: "Meerut" },
    { name: "Kashvi Arora", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://in.linkedin.com/in/kashvi15", image: '/images/teams/partnerships/kashvi.jpg', location: "Delhi" },
    { name: "Mahak", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://www.linkedin.com/in/documentdiarieswithmahak/", image: '/images/teams/partnerships/mahak.png', location: "Delhi" },
    { name: "Aditi Madhukar", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/aditimadhukar/", image: '/images/teams/discord/aditi.jpg', location: "Delhi" },
    { name: "Avya Giri", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/avya-giri-919842320", image: '/images/teams/discord/avya.png', location: "Delhi" },
    { name: "Simran Nagekar", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/simransn", image: '/images/teams/discord/simran.png', location: "Bengaluru" },
    { name: "Vijay Laxmi", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/laxmi-vijay/", image: '/images/teams/speaker/vijay1.jpg', location: "Delhi" },
    { name: "Bhargavi Gangoor", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/bhargavi-gangoor-857b9b294", image: '/images/teams/host/bhargavi.jpg', location: "Bengaluru" },
    { name: "Pathan Sama Khan", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/sama-khan-628959281", image: '/images/teams/speaker/pathan.jpg', location: "Hyderabad" },
    
  ];


  const observerRef = useRef();
  const elementsRef = useRef([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // On mobile, show the info panel when card comes into view
            if (isMobile) {
              const info = entry.target.querySelector('.info-panel');
              if (info) info.style.transform = 'translateY(0)';
            }
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
  }, [isMobile]); // Re-run effect when isMobile changes

  const TeamCard = ({ member, index = 0 }) => (
    <div
      className="team-card animate-on-scroll"
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          const info = e.currentTarget.querySelector('.info-panel');
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1.05)';
          if (info) info.style.transform = 'translateY(0)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          const info = e.currentTarget.querySelector('.info-panel');
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1)';
          if (info) info.style.transform = 'translateY(100%)';
        }
      }}
    >
      <img
        src={member.image || '/default-avatar.png'}
        alt={member.name}
      />
      <div className="info-panel" style={isMobile ? { transform: 'translateY(0)' } : {}}>
        <h3>{member.name}</h3>
        <p className='location'><MapPin size={14} /> {member.location}</p>
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
          >
            <Linkedin size={16} /> Connect
          </a>
        )}
      </div>
    </div>
  );

  const SectionHeader = ({ title, icon: Icon, count, tagline }) => (
    <div className="section-header animate-on-scroll">
      <div className="section-header-content">
        <div className="section-icon">
          <Icon className="icon" />
        </div>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="section-divider"></div>
      <p className="section-subtitle">{count} amazing individuals</p>
      {tagline && (
        <p style={{
          fontSize: '1rem',
          fontStyle: 'italic',
          color: '#b0bec5',
          marginTop: '0.4rem'
        }}>{tagline}</p>
      )}
    </div>
  );

  const renderDepartment = (deptName, icon, tagline) => {
    const filtered = organizingTeam.filter(member => member.department === deptName);
    if (filtered.length === 0) return null;

    return (
      <section className="team-section" key={deptName}>
        <SectionHeader title={`${deptName} Team`} icon={icon} count={filtered.length} tagline={tagline} />
        <div className="team-grid">
          {filtered.map((member, index) => (
            <div key={index} className="team-card-wrapper">
              <TeamCard member={member} index={index} />
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar onContactClick={onContactClick} />
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

          {renderDepartment("Core", Users, "Leading from the front — vision, direction, execution.")}
          {renderDepartment("Tech", Award, "Building the backbone of innovation.")}
          {renderDepartment("Design", Brush, "Turning imagination into visuals, one pixel at a time.")}
          {renderDepartment("Content", BookText, "We don’t just write content — we write experiences.")}
          {renderDepartment("PR", Megaphone, "Crafting buzz, clicks, and conversations.")}
          {renderDepartment("Host", Home, "Where experience meets execution.")}
          {renderDepartment("Partnerships/Sponsorships", Handshake, "Powering possibilities through meaningful alliances.")}
          {renderDepartment("Discord", MessageCircle, "Where community meets code — live, loud, and connected.")}
          {renderDepartment("Speaker Outreach", Mic, "Voicing inspiration, one speaker at a time.")}
        </div>
      </div>
      <ToastContainer />
      <StyleTag />
    </>
  );
};

export default TeamPage;

// TeamCard Styles as CSS-in-JS (via <style> tag)

const teamCardStyles = `
  .team-card {
    width: 260px;
    height: 340px;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .team-card img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    filter: brightness(0.9);
  }

  .team-card .info-panel {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 1.2rem;
    backdrop-filter: blur(12px);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    transform: translateY(100%);
    transition: transform 0.4s ease;
    z-index: 10;
  }

  .team-card .info-panel h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .team-card .info-panel p {
  margin: 0.2rem 0;
  font-size: 0.85rem;
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center; /* <-- Center horizontally */
  gap: 0.3rem;
  text-align: center;
}


  .team-card .linkedin-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.5rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.875rem;
    border-radius: 50px;
    border: 1px solid rgba(255,255,255,0.3);
    background-color: rgba(255,255,255,0.1);
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .team-card .linkedin-link:hover {
    background-color: rgba(255,255,255,0.3);
    transform: scale(1.05);
  }

`;

const StyleTag = () => <style>{teamCardStyles}</style>;
