import React, { useEffect, useRef } from 'react';
import { User, Award, Mic, Users, Gavel, Linkedin, BookText, Megaphone, Home, Handshake, MessageCircle, Brush } from 'lucide-react';
import './Humans.css';
import Navbar from './Navbar';
import Footer from './Footer';

const TeamPage = ({ onContactClick }) => {
  const organizingTeam = [
    { name: "Manik", role: "Lead Organizer", department: "Core", linkedin: "https://www.linkedin.com/in/mrmanik",image : '../public/images/teams/manik.jpg' },
    { name: "Bagavati Narayanan", role: "Tech Lead", department: "Tech", linkedin: "https://www.linkedin.com/in/bagavati-narayanan-98484b292",image : '../public/images/teams/tech/bagavati.jpg' },
    { name: "Kashika Gupta", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/kashikagupta" , image : '../public/images/teams/tech/kashika.jpg'},
    { name: "Adyasha", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/adyashadas04",image : '../public/images/teams/tech/adyasha.jpg' },
    { name: "Archana", role: "Design Lead", department: "Design", linkedin: "https://www.linkedin.com/in/archana-gupta2006" ,image : '../public/images/teams/design/archana.jpeg'},
    { name: "Ananya Agarwal", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ananya-agarwal-861317290/ ",image : '../public/images/teams/design/ananya.png' },
    { name: "Ankita Kuntal", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ankita-kuntal",image : '../public/images/teams/design/ankita.jpg' },
    { name: "Alina Abreeq", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/alina-abreeq",image : '../public/images/teams/design/alina.png'},
    { name: "Ishita Soni", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ishita-soni-work?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",image : '../public/images/teams/design/ishita.jpg' },
    { name: "Aarushi Chottani", role: "Content Writing Lead", department: "Content", linkedin: "www.linkedin.com/in/aarushi-chottani-80b861322 ",image : '../public/images/teams/content/aarushi.png'  },
    { name: "Charmi Reddy P", role: "Content Writing Team", department: "Content", linkedin: " https://www.linkedin.com/in/charmi-reddy-p-b2aaa2294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",image : '../public/images/teams/content/charmi.png'  },
    { name: "Sanwedana Lokhande", role: "Content Writing Team", department: "Content", linkedin: "https://www.linkedin.com/in/sanwedana-lokhande-35332a33a/",image : '../public/images/teams/content/sanwedana.jpg'  },
    { name: "Niharika Rawat", role:"PR Lead", department: "PR", linkedin: "http://linkedin.com/in/niharika-rawat-9a1156256",image : '../public/images/teams/pr/nikarika.png'  },
    { name: "Dhairya Kanabar", role: "PR Team", department: "PR", linkedin: "https://www.linkedin.com/in/dhairya-kanabar-411990294",image : '../public/images/teams/pr/dhairiya.jpg' },
    { name: "Bhargavi Gangoor", role: "Host Team", department: "Host", linkedin: "https://www.linkedin.com/in/bhargavi-gangoor-857b9b294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",image : '../public/images/teams/host/bhargavi.jpg' },
    { name: "Swastika Tiwari", role: "Host Team", department: "Host", linkedin: "https://www.linkedin.com/in/swastika-tiwari-007169314",image : '../public/images/teams/host/swastika.png' },
    { name: "Gungun Goel", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://www.linkedin.com/in/gungun-goyal-05154426a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",image : '../public/images/teams/partnerships/gungun.jpg' },
    { name: "Kashvi Arora", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://in.linkedin.com/in/kashvi15",image : '../public/images/teams/partnerships/kashvi.jpg' },
    { name: "Mahak", role: "Partnerships/Sponsorships Team", department: "Partnerships/Sponsorships", linkedin: "https://www.linkedin.com/in/documentdiarieswithmahak/",image : '../public/images/teams/partnerships/mahak.png' },
    { name: "Aditi Madhukar", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/aditimadhukar/",image : '../public/images/teams/discord/aditi.jpg' },
     { name: "Avya Giri", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/avya-giri-919842320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",image : '../public/images/teams/discord/avya.png' },
      { name: "Simran Nagekar", role: "Discord Team", department: "Discord", linkedin: "https://www.linkedin.com/in/simransn",image : '../public/images/teams/discord/simran.jpg' },
       { name: "Maanasa", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/r-maanasa22",image : '../public/images/teams/speaker/manasa.jpg' },
        { name: "Pathan Sama Khan", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/sama-khan-628959281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",image : '../public/images/teams/speaker/pathan.jpg' },
          { name: "Vijay Laxmi", role: "Speaker Outreach Team", department: "Speaker Outreach", linkedin: "https://www.linkedin.com/in/laxmi-vijay/",image : '../public/images/teams/speaker/vijay.jpg' },
      

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
      className="team-card"
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
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.4s ease',
          filter: 'brightness(0.9)',
        }}
      />

      {/* Info panel */}
      <div
        className="info-panel"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: '1rem',
          backdropFilter: 'blur(12px)',
          background: 'rgba(0,0,0,0.4)',
          borderTopLeftRadius: '1.5rem',
          borderTopRightRadius: '1.5rem',
          color: 'white',
          transform: 'translateY(100%)',
          transition: 'transform 0.4s ease',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>{member.name}</h3>

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




  const SectionHeader = ({ title, icon: Icon, count }) => (
    <div className="section-header animate-on-scroll">
      <div className="section-header-content">
        <div className="section-icon">
          <Icon className="icon" />
        </div>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="section-divider"></div>
      <p className="section-subtitle">{count} amazing individuals</p>
    </div>
  );

  const renderDepartment = (deptName, icon) => {
    const filtered = organizingTeam.filter(member => member.department === deptName);
    if (filtered.length === 0) return null;

    return (
      <section className="team-section" key={deptName}>
        <SectionHeader title={`${deptName} Team`} icon={icon} count={filtered.length} />
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

          {renderDepartment("Core", Users)}
          {renderDepartment("Tech", Award)}
          {renderDepartment("Design",Brush)}
          {renderDepartment("Content", BookText)}
          {renderDepartment("PR", Megaphone)}
          {renderDepartment("Host", Home)}
          {renderDepartment("Partnerships/Sponsorships", Handshake)}
          {renderDepartment("Discord", MessageCircle)}
          {renderDepartment("Speaker Outreach", Mic)}

        </div>
      </div>

    </>
  );
};

export default TeamPage;
