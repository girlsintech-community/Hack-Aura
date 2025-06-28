import React, { useEffect, useRef } from 'react';
import { User, Award, Mic, Users, Gavel, Linkedin } from 'lucide-react';
import './Humans.css';
import Navbar from './Navbar';
import Footer from './Footer';

const TeamPage = ({ onContactClick }) => {
  const organizingTeam = [
    { name: "Manik", role: "Lead Organizer", department: "Core", linkedin: "https://www.linkedin.com/in/mrmanik",image : '../public/images/teams/manik.jpg' },
    { name: "Bagavati Narayanan", role: "Tech Lead", department: "Tech", linkedin: "https://www.linkedin.com/in/bagavati-narayanan-98484b292",image : '../public/images/teams/tech/bagavati.jpg' },
    { name: "Kashika Gupta", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/kashikagupta" , image : '../public/images/teams/tech/kashika.jpg'},
    { name: "Adyasha", role: "Tech Team", department: "Tech", linkedin: "https://www.linkedin.com/in/adyashadas04",image : '../public/images/teams/tech/adyasha.png' },
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

 const TeamCard = ({ member, index = 0 }) => (
  <div
    className="team-card animate-on-scroll"
    style={{
      animationDelay: `${index * 150}ms`,
      '--card-index': index,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '1.5rem',
      width: '280px',
      height: '360px',
      background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(16,185,129,0.1), rgba(6,182,212,0.12))',
      border: '2px solid rgba(255,255,255,0.15)',
      boxShadow: '0 20px 40px rgba(59,130,246,0.25), 0 0 30px rgba(16,185,129,0.2)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 0,
    }}
  >
    {/* Image (top half) */}
   {/* Image (top 60%) */}
<div
  className="team-card-image-wrapper"
  style={{
    width: '100%',
    height: '60%', // increased height
    overflow: 'hidden',
    borderTopLeftRadius: '1.5rem',
    borderTopRightRadius: '1.5rem',
  }}
>
  <img
    src={member.image || '/default-avatar.png'}
    alt={member.name}
    className="team-card-image"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top center', // key fix
    }}
  />
</div>


    {/* Content (bottom half) */}
    <div
      className="team-card-content"
      style={{
        padding: '1rem',
        textAlign: 'center',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h3
        className="team-card-name"
        style={{
          fontSize: '1.1rem',
          fontWeight: 'bold',
          marginBottom: '0.3rem',
          color: '#e5e7eb',
        }}
      >
        {member.name}
      </h3>
      <p
        className="team-card-role"
        style={{
          fontSize: '0.9rem',
          color: '#a1a1aa',
          marginBottom: '0.5rem',
        }}
      >
        {member.role}
      </p>
      {member.linkedin && (
        <a
          className="team-card-linkedin"
          href={getLinkedinURL(member.linkedin)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn profile of ${member.name}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            fontSize: '0.875rem',
            color: '#9ca3af',
            background: 'rgba(255,255,255,0.08)',
            padding: '0.35rem 0.9rem',
            borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#e5e7eb';
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#9ca3af';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}
        >
          <Linkedin size={16} />
        </a>
      )}
    </div>

    {/* Optional visual corner */}
    <div className="cyber-corner"></div>
  </div>
);



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
          {renderDepartment("Design", Mic)}
          {renderDepartment("Content", User)}
          {renderDepartment("PR", Gavel)}
          {renderDepartment("Host", Gavel)}

        </div>
      </div>

    </>
  );
};

export default TeamPage;
