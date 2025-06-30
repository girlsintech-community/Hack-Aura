import React, { useEffect, useRef } from 'react';
import { User, Award, Mic, Users, Gavel, Linkedin, BookText, Megaphone, Home, Handshake, MessageCircle, Brush } from 'lucide-react';
import { MapPin } from 'lucide-react';
import './Humans.css';
import Navbar from './Navbar';
import Footer from './Footer';

const TeamPage = ({ onContactClick }) => {
  const organizingTeam = [
    { name: "Manik", role: "Lead Organizer", department: "Core", linkedin: "https://www.linkedin.com/in/mrmanik", image: '../public/images/teams/manik.jpg', location: "Haryana" },
    { name: "Bagavati Narayanan", role: "Tech Lead", department: "Tech", linkedin: "https://www.linkedin.com/in/bagavati-narayanan-98484b292", image: '../public/images/teams/tech/bagavati.jpg', location: "Chennai" },
    { name: "Kashika Gupta", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/kashikagupta", image: '../public/images/teams/tech/kashika1.png', location: "Indore" },
    { name: "Adyasha", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/adyashadas04", image: '../public/images/teams/tech/adyasha.jpg', location: "Bhubaneshwar" },
    { name: "Archana", role: "Design Lead", department: "Design", linkedin: "https://www.linkedin.com/in/archana-gupta2006", image: '../public/images/teams/design/archana1.jpg', location: "Delhi" },
    { name: "Ananya Agarwal", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ananya-agarwal-861317290/ ", image: '../public/images/teams/design/ananya.png', location: "Mumbai" },
    { name: "Ankita Kuntal", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ankita-kuntal", image: '../public/images/teams/design/ankita.jpg', location: "Srinagar" },
    { name: "Alina Abreeq", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/alina-abreeq", image: '../public/images/teams/design/alina.png', location: "Hyderabad" },
    { name: "Ishita Soni", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ishita-soni-work", image: '../public/images/teams/design/ishita.jpg', location: "Jaipur" },
    { name: "Aarushi Chottani", role: "Content Writing Lead", department: "Content", linkedin: "www.linkedin.com/in/aarushi-chottani-80b861322", image: '../public/images/teams/content/aarushi.png', location: "Pune" },
    { name: "Charmi Reddy P", role: "Content Writing Team", department: "Content", linkedin: " https://www.linkedin.com/in/charmi-reddy-p-b2aaa2294", image: '../public/images/teams/content/charmi.png', location: "Hyderabad" },
    { name: "Sanwedana Lokhande", role: "Content Writing Team", department: "Content", linkedin: "https://www.linkedin.com/in/sanwedana-lokhande-35332a33a/", image: '../public/images/teams/content/sanwedana.jpg', location: "Nagpur" },
    { name: "Niharika Rawat", role: "PR Lead", department: "PR", linkedin: "http://linkedin.com/in/niharika-rawat-9a1156256", image: '../public/images/teams/pr/nikarika.png', location: "Pune" },
    { name: "Dhairya Kanabar", role: "PR Team", department: "PR", linkedin: "https://www.linkedin.com/in/dhairya-kanabar-411990294", image: '../public/images/teams/pr/dhairiya.jpg', location: "Surendranagar" },

       { name: "Gungun Goel", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://www.linkedin.com/in/gungun-goyal-05154426a", image: '../public/images/teams/partnerships/gungun.jpg', location: "Meerut" },
    { name: "Kashvi Arora", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://in.linkedin.com/in/kashvi15", image: '../public/images/teams/partnerships/kashvi.jpg', location: "Delhi" },
    { name: "Mahak", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://www.linkedin.com/in/documentdiarieswithmahak/", image: '../public/images/teams/partnerships/mahak.png', location: "Delhi" },
    { name: "Aditi Madhukar", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/aditimadhukar/", image: '../public/images/teams/discord/aditi.jpg', location: "Delhi" },
    { name: "Avya Giri", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/avya-giri-919842320", image: '../public/images/teams/discord/avya.png', location: "Delhi" },
    { name: "Simran Nagekar", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/simransn", image: '../public/images/teams/discord/simran.jpg', location: "Bengaluru" },
    { name: "Bhargavi Gangoor", role: "Host Team", department: "Speaker Outreach Team", linkedin: "https://www.linkedin.com/in/bhargavi-gangoor-857b9b294", image: '../public/images/teams/host/bhargavi.jpg', location: "Bengaluru" },
    { name: "Pathan Sama Khan", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/sama-khan-628959281", image: '../public/images/teams/speaker/pathan.jpg', location: "Hyderabad" },
    { name: "Vijay Laxmi", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/laxmi-vijay/", image: '../public/images/teams/speaker/vijay.jpg', location: "Delhi" },


  ];

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
  }, []);

  const getLinkedinURL = (url) => {
    if (!url) return null;
    if (url.startsWith("http")) return url;
    return `https://www.linkedin.com/in/${url}`;
  };



  const TeamCard = ({ member, index = 0 }) => {
    return (
      <div
        className="team-card animate-on-scroll"
        style={{
          width: '260px',
          height: '340px',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          animationDelay: `${index * 150}ms`,
        }}
        onMouseEnter={(e) => {
          const info = e.currentTarget.querySelector('.info-panel');
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1.05)';
          if (info) info.style.transform = 'translateY(0)';
        }}
        onMouseLeave={(e) => {
          const info = e.currentTarget.querySelector('.info-panel');
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1)';
          if (info) info.style.transform = 'translateY(100%)';
        }}
      >
        {/* Background image */}
        <img
          src={member.image || '/default-avatar.png'}
          alt={member.name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            filter: 'brightness(0.9)',
          }}
        />


        <div
          className="info-panel"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            padding: '1.2rem',
            backdropFilter: 'blur(12px)',
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            transform: 'translateY(100%)',
            transition: 'transform 0.4s ease',
          }}
        >

          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>{member.name}</h3>
          <p style={{ margin: '0.2rem 0', fontSize: '0.85rem', color: '#ccc' }}>
            <MapPin size={14} /> {member.location}
          </p>
          {member.linkedin && (
            <a
              href={
                member.linkedin.startsWith('http')
                  ? member.linkedin
                  : `https://www.linkedin.com/in/${member.linkedin}`
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginTop: '0.5rem',
                padding: '0.4rem 0.8rem',
                fontSize: '0.875rem',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.3)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Linkedin size={16} /> Connect
            </a>
          )}
        </div>
      </div>
    );
  };




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
        <p className="section-tagline" style={{
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

    </>
  );
};

export default TeamPage;
