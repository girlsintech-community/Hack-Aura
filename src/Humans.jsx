import React, { useEffect, useRef } from 'react';
import { User, Award, Mic, Users, Gavel, Linkedin } from 'lucide-react';
import './Humans.css';
import Navbar from './Navbar';
import Footer from './Footer';

const TeamPage = ({ onContactClick }) => {
  const organizingTeam = [
    { name: "Manik", role: "Lead Organizer", department: "Core", linkedin: "mrmanik" },
    { name: "Bagavati Narayanan", role: "Tech Lead", department: "Tech", linkedin: "bagavati-narayanan-98484b292" },
    { name: "Kashika Gupta", role: "Tech Team", department: "Tech", linkedin: "kashikagupta" },
    { name: "Adyasha", role: "Tech Team", department: "Tech", linkedin: "adyashadas04" },
    { name: "Archana", role: "Design Lead", department: "Design", linkedin: "https://www.linkedin.com/in/archana-gupta2006" },
    { name: "Ananya Agarwal", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ananya-agarwal-861317290/ " },
    { name: "Ankita Kuntal", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ankita-kuntal" },
    { name: "Alina Abreeq", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/alina-abreeq" },
    { name: "Ishita Soni", role: "Design Team", department: "Design", linkedin: "https://www.linkedin.com/in/ishita-soni-work?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Aarushi Chottani", role: "Content Writing Lead", department: "Content", linkedin: "www.linkedin.com/in/aarushi-chottani-80b861322 " },
    { name: "Charmi Reddy P", role: "Content Writing Team", department: "Content", linkedin: " https://www.linkedin.com/in/charmi-reddy-p-b2aaa2294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Sanwedana Lokhande", role: "Content Writing Team", department: "Content", linkedin: "https://www.linkedin.com/in/sanwedana-lokhande-35332a33a/" },
    { name: "Niharika Rawat", role:"PR Lead", department: "PR", linkedin: "http://linkedin.com/in/niharika-rawat-9a1156256" },
    { name: "Dhairya Kanabar", role: "PR Team", department: "PR", linkedin: "https://www.linkedin.com/in/dhairya-kanabar-411990294" }
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
        '--card-index': index
      }}
    >
      <div className="team-card-overlay"></div>
      <div className="team-card-content">
        <div className="team-card-avatar">
          <User className="avatar-icon" />
        </div>
        <h3 className="team-card-name">{member.name}</h3>
        <p className="team-card-role">{member.role}</p>
        {member.linkedin && (
          <a
            className="team-card-linkedin"
            href={getLinkedinURL(member.linkedin)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn profile of ${member.name}`}
          >
            <Linkedin className="linkedin-icon" />
          </a>
        )}
      </div>
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

          <div className="cta-section animate-on-scroll">
            <h3 className="cta-title">Want to Join Our Team?</h3>
            <p className="cta-description">
              We're always looking for passionate individuals to help make Hack Aura even better.
              Get in touch if you'd like to be part of our amazing community!
            </p>
            <button className="cta-button" onClick={onContactClick}>Get Involved</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default TeamPage;
