import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, MapPin } from 'lucide-react';

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
        <div style = {{display :'flex'}}>
          <h3 style={{ fontSize : '15px' }}>{member.name}</h3>
          {member.linkedin && (
          <a
            href={
              member.linkedin.startsWith('http')
                ? member.linkedin
                : `https://www.linkedin.com/in/${member.linkedin}`
            }
            target="_blank"
            rel="noopener noreferrer"
            style ={{height : '10px', marginLeft : '15px'}}
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

      <style jsx>{`
        .team-page {
          min-height: 100vh;
          width: 100%;
          padding: 2rem 0;
          margin-top: 50px;
        }

        .team-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .page-header {
          text-align: center;
          padding: 3rem 0 4rem;
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #06b6d4, #10b981, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
        }

        .page-description {
          max-width: 700px;
          margin: 0 auto;
          color: #94a3b8;
          font-size: 1.2rem;
          line-height: 1.7;
          font-weight: 400;
        }

        .page-divider {
          height: 4px;
          width: 120px;
          background: linear-gradient(90deg, #06b6d4, #10b981, #3b82f6);
          margin: 2rem auto;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.4);
        }

        /* THREE CARDS PER ROW LAYOUT */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          padding: 2rem 0;
          justify-items: center;
        }

        .team-card-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .team-card {
          width: 100%;
          max-width: 280px;
          height: 400px;
          border-radius: 1.5rem;
          overflow: hidden;
          position: relative;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(6, 182, 212, 0.1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(16, 185, 129, 0.05));
          backdrop-filter: blur(10px);
        }

        .team-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 0 30px rgba(6, 182, 212, 0.3);
          border-color: rgba(6, 182, 212, 0.4);
        }

        .image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }


        .team-member-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          filter: brightness(0.9) contrast(1.05);
        }

        .team-card:hover .team-member-image {
          transform: scale(1.05);
          filter: brightness(0.95) contrast(1.1);
        }

        .name-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          padding: 1rem;
          backdrop-filter: blur(8px);
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.3) 70%,
            transparent 100%
          );
          color: white;
          z-index: 2;
          border-bottom: 1px solid rgba(6, 182, 212, 0.2);
        }

        .team-card .name-header .department {
          margin: 0.2rem 0;
          font-size: 0.8rem;
          color: #10b981;
          font-weight: 600;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .info-panel {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          padding: 1.5rem;
          backdrop-filter: blur(8px);
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0.3) 100%
          );
          color: white;
          z-index: 2;
          border-top: 1px solid rgba(6, 182, 212, 0.2);
          transform: translateY(0);
          transition: transform 0.3s ease;
        }

        .team-card:hover .info-panel {
          transform: translateY(0);
        }

        .team-card .info-panel h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        .team-card .info-panel .location {
          margin: 0.3rem 0;
          font-size: 0.8rem;
          color: #06b6d4;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .team-card .info-panel .role {
          font-style: italic;
          margin: 0.5rem 0 1rem 0;
          color: #e2e8f0;
          font-size: 0.85rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .team-card .team-card-linkedin {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          font-size: 0.9rem;
          border-radius: 50px;
          border: 1px solid rgba(6, 182, 212, 0.4);
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(16, 185, 129, 0.2));
          color: #ffffff;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          backdrop-filter: blur(8px);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .team-card .team-card-linkedin:hover {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(16, 185, 129, 0.4));
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
          border-color: rgba(6, 182, 212, 0.6);
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* RESPONSIVE DESIGN */
        
        /* Tablets */
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          
          .team-card {
            max-width: 280px;
            height: 360px;
          }
          
          .page-title {
            font-size: clamp(2rem, 4vw, 3rem);
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .team-container {
            padding: 0 1rem;
          }
          
          .team-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .team-card {
            max-width: 100%;
            height: 320px;
          }
          
          .page-header {
            padding: 2rem 0 3rem;
          }
          
          .page-description {
            font-size: 1rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .team-card {
            height: 280px;
          }
          
          .info-panel {
            padding: 1rem;
          }
          
          .info-panel h3 {
            font-size: 1rem;
          }
          
          .info-panel .location,
          .info-panel .role {
            font-size: 0.7rem;
          }
          
          .team-card-linkedin {
            padding: 0.5rem 0.8rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamPage;