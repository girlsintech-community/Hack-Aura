import React, { useEffect, useRef } from 'react';
import { User, Award, Mic, Users, Gavel, Linkedin } from 'lucide-react';
import './Humans.css';

const TeamPage = () => {
  // Sample data - replace with your actual team members
  const organizingTeam = [
    { name: "John Doe", role: "Lead Organizer", linkedin: "johndoe" },
    { name: "Jane Smith", role: "Tech Lead", linkedin: "janesmith" },
    { name: "Alex Johnson", role: "Design Lead", linkedin: "alexjohnson" }
  ];

  const speakers = [
    { name: "Dr. Sarah Wilson", topic: "AI & Machine Learning", linkedin: "sarahwilson" },
    { name: "Mike Chen", topic: "Blockchain Technology", linkedin: "mikechen" },
    { name: "Emily Rodriguez", topic: "Cybersecurity", linkedin: "emilyrodriguez" }
  ];

  const mentors = [
    { name: "David Kim", topic: "Full Stack Development", linkedin: "davidkim" },
    { name: "Lisa Zhang", topic: "Product Management", linkedin: "lisazhang" },
    { name: "Robert Taylor", topic: "Startup Strategy", linkedin: "roberttaylor" }
  ];

  const judges = [
    { name: "Prof. Amanda Brown", topic: "Innovation Expert", linkedin: "amandabrown" },
    { name: "Chris Martinez", topic: "Tech Entrepreneur", linkedin: "chrismartinez" },
    { name: "Priya Patel", topic: "Venture Capitalist", linkedin: "priyapatel" }
  ];

  // Refs for animation
  const observerRef = useRef();
  const elementsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
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

    // Observe all elements with animation class
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

  const TeamCard = ({ member, showTopic = false, index = 0 }) => (
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
        
        <h3 className="team-card-name">
          {member.name}
        </h3>
        
        <p className="team-card-role">
          {showTopic ? member.topic : member.role}
        </p>
        
        <div className="team-card-linkedin">
          <Linkedin className="linkedin-icon" />
          <span>{member.linkedin}</span>
        </div>
      </div>
    </div>
  );

  const SectionHeader = ({ title, icon: Icon, count }) => (
    <div className="section-header animate-on-scroll">
      <div className="section-header-content">
        <div className="section-icon">
          <Icon className="icon" />
        </div>
        <h2 className="section-title">
          {title}
        </h2>
      </div>
      <div className="section-divider"></div>
      <p className="section-subtitle">{count} amazing individuals</p>
    </div>
  );

  return (
    <div className="team-page">
      <div className="team-container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">
            Humans of Hack Aura
          </h1>
          <p className="page-description">
            Meet the incredible team behind Hack Aura - passionate individuals dedicated to creating 
            an unforgettable hackathon experience for innovators and creators.
          </p>
          <div className="page-divider"></div>
        </div>

        {/* Organizing Team Section */}
        <section className="team-section">
          <SectionHeader 
            title="Organising Team" 
            icon={Users} 
            count={organizingTeam.length}
          />
          <div className="team-grid">
            {organizingTeam.map((member, index) => (
              <div key={index} className="team-card-wrapper">
                <TeamCard member={member} index={index} />
              </div>
            ))}
          </div>
        </section>

        {/* Speakers Section */}
        <section className="team-section">
          <SectionHeader 
            title="Speakers" 
            icon={Mic} 
            count={speakers.length}
          />
          <div className="team-grid">
            {speakers.map((member, index) => (
              <div key={index} className="team-card-wrapper">
                <TeamCard member={member} showTopic={true} index={index} />
              </div>
            ))}
          </div>
        </section>

        {/* Mentors Section */}
        <section className="team-section">
          <SectionHeader 
            title="Mentors" 
            icon={Award} 
            count={mentors.length}
          />
          <div className="team-grid">
            {mentors.map((member, index) => (
              <div key={index} className="team-card-wrapper">
                <TeamCard member={member} showTopic={true} index={index} />
              </div>
            ))}
          </div>
        </section>

        {/* Judges Section */}
        <section className="team-section">
          <SectionHeader 
            title="Judges" 
            icon={Gavel} 
            count={judges.length}
          />
          <div className="team-grid">
            {judges.map((member, index) => (
              <div key={index} className="team-card-wrapper">
                <TeamCard member={member} showTopic={true} index={index} />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="cta-section animate-on-scroll">
          <h3 className="cta-title">
            Want to Join Our Team?
          </h3>
          <p className="cta-description">
            We're always looking for passionate individuals to help make Hack Aura even better. 
            Get in touch if you'd like to be part of our amazing community!
          </p>
          <button className="cta-button">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;