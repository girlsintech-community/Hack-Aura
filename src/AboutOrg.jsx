import React, { useState } from 'react';
import './About.css';
import './Testimonials.css';
import slide1 from './assets/images/slide1.png';
import slide2 from './assets/images/slide2.png';
import slide3 from './assets/images/slide3.png';

const OrganizationAbout = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(3);

  const galleryImages = [
    { id: 1, src: slide1, alt: "Blockchain Fundamentals" },
    { id: 2, src: slide2, alt: 'Google Girl Hackathon' },
    { id: 3, src: slide3, alt: 'How to crack Intuit' },
  ];

  const reviews = [
    {
      id: 1,
      text: `This community has helped me a lot in staying motivated, and I've also discovered many opportunities through it.
I attended several sessions conducted by the community and gained meaningful insights from them.
The sessions were interactive, which I really appreciated.
I would absolutely recommend that girls join this wonderful community.`,
      author: "Manisha HM",
      role: "https://www.linkedin.com/in/manisha-halale-69b541228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: 2,
      text: ` 
Girls Leading Tech is an incredible initiative that empowers girls to advance their careers by providing valuable technical knowledge. It’s especially beneficial for female students looking to grow in the tech field. I’m proud to be part of this inspiring community and highly recommend it to all girls. Let’s grow and inspire each other!
`,
      author: "PREMI SREE PRIYA T S ",
      role: "https://www.linkedin.com/in/ts-premi-sree-priya-061a54293",
    },
     {
      id: 2,
      text: ` 
The constant support and resources provided by the Girls in Tech community, available at any time of the day, are truly commendable. The mentors are exceptionally supportive, addressing all doubts and offering top-quality resources across both technical and non-technical domains. Their approachable and friendly nature fosters open communication, making it easy for members to interact and seek guidance. 
`,
      author: "Khushi Mittal",
      role: "https://www.linkedin.com/in/khushi-mittal-21b3ba246/",
    }
  ];
  

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg 
        key={i}
        className={`star ${i < rating ? 'filled' : ''}`}
        style={{ '--delay': `${0.1 + i * 0.1}s` }}
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ));
  };

  const loadMoreReviews = () => {
    setVisibleReviews(prev => Math.min(prev + 3, reviews.length));
  };

  return (
    <section id="organization" className="org-section">
      <div className="org-container">
        {/* About Section */}
        <div className="org-content">
          <h2 className="cyber-heading">ABOUT GIRLS LEADING TECH</h2>
          
          <div className="org-details">
            <p className="org-description">
              We're 2000+ girls strong, a close-knit community for girls who
              want to excel in their careers in Tech.
            </p>
            
            <div className="cyber-divider"></div>
            
            <p className="org-subheading">Here you can expect valuable resources like:</p>
            
            <ul className="cyber-list">
              {[
                "Support from other Girls from different parts of India",
                "Internships/Jobs Updates",
                "Information about Events, Sessions, Scholarships",
                "Guidance from Community Members",
                "Monthly Coffee Chats",
                "Text & Video Resources",
                "On-demand Webinars",
                "Hiring & Hackathon Info"
              ].map((item, index) => (
                <li key={index} className="cyber-list-item">
                  <span className="cyber-bullet">◆</span> {item}
                </li>
              ))}
            </ul>
            
            <div className="org-stats-container">
              {[
                { label: 'Members', value: '2000+' },
                { label: 'Social Media', value: '11k+' },
                { label: 'Mentorship Sessions', value: '26' },
                { label: 'Coffee chats', value: '5' },
                { label: 'Contests', value: '3' },
              ].map((stat, idx) => (
                <div className="stat-card" key={idx}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="cyber-gallery">
          <h2 className="gallery-title cyber-subheading">Inside Girls Leading Tech</h2>
          
          <div className="gallery-container">
            <button className="gallery-nav prev" onClick={prevImage} aria-label="Previous image">
              &lt;
            </button>
            
            <div className="gallery-main">
              <img
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                className="active-gallery-image"
                loading="lazy"
              />
            </div>
            
            <button className="gallery-nav next" onClick={nextImage} aria-label="Next image">
              &gt;
            </button>
          </div>
          
          <div className="gallery-indicators">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <h3 className="gallery-subheading cyber-text-accent">
            {galleryImages[activeImage].alt}
          </h3>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2 className="cyber-heading">Community Voices</h2>
          <p className="cyber-subtitle">Hear what our members say about their Girls Leading Tech experience</p>
        </div>
        
        <div className="testimonials-grid">
          {reviews.slice(0, visibleReviews).map((review) => (
            <div className="testimonial-card" key={review.id}>
              <div className="testimonial-rating">
                {renderStars(review.rating)}
                <span className="testimonial-date">{review.date}</span>
              </div>
              
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{review.text}</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {review.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{review.author}</h4>
                 <div className="author-role">
  <a href={review.role} target="_blank" rel="noopener noreferrer" className="linkedin-link">
    <img 
      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" 
      alt="LinkedIn" 
      className="linkedin-icon"
    />
  </a>
</div>


                </div>
              </div>
              
              <div className="cyber-corner"></div>
            </div>
          ))}
        </div>
        
        {visibleReviews < reviews.length && (
          <button className="load-more" onClick={loadMoreReviews}>
            Show More Reviews
            <span className="cyber-arrow">→</span>
          </button>
        )}
      </section>
    </section>
  );
};

export default OrganizationAbout;