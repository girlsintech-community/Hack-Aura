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
    { id: 1, src: slide1, alt: 'Blockchain Fundamentals' },
    { id: 2, src: slide2, alt: 'Google Girl Hackathon' },
    { id: 3, src: slide3, alt: 'How to crack Intuit' },
  ];

  const reviews = [
    {
      id: 1,
      text: `This community has helped me a lot in staying motivated, and I've also discovered many opportunities through it. I would absolutely recommend that girls join this wonderful community.`,
      author: 'Manisha HM',
      role: 'https://www.linkedin.com/in/manisha-halale-69b541228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      id: 2,
      text: `Girls Leading Tech is an incredible initiative that empowers girls to advance their careers by providing valuable technical knowledge. It’s especially beneficial for female students looking to grow in the tech field. Let’s grow and inspire each other!`,
      author: 'PREMI SREE PRIYA T S',
      role: 'https://www.linkedin.com/in/ts-premi-sree-priya-061a54293',
    },
    {
      id: 3,
      text: `The mentors are exceptionally supportive, addressing all doubts and offering top-quality resources across both technical and non-technical domains. Their approachable and friendly nature fosters open communication, making it easy for members to interact and seek guidance.`,
      author: 'Khushi Mittal',
      role: 'https://www.linkedin.com/in/khushi-mittal-21b3ba246/',
    },
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => Math.min(prev + 3, reviews.length));
  };

  return (
    <section id="organization" className="org-section">
      <div className="org-container">
        <div className="org-content">
          <h2 className="cyber-heading">ABOUT GIRLS LEADING TECH</h2>

          <div className="org-details">
            <div className="text-block">
              <div className="org-vision-section">
  <div className="vision-card">
    <h3 className="vision-title">Vision</h3>
    <p>
      To build a world where every Indian girl—regardless of background or resources—has equal access to opportunities, the confidence to lead, and a strong support system to thrive in technology and beyond. We envision girls not just participating in tech, but leading it—empowered to pursue dreams, uplift families, and shape an inclusive future.
    </p>
  </div>

  <div className="vision-card">
    <h3 className="vision-title">Mission</h3>
    <p>
      To empower Indian girls in tech by providing them with access to resources, opportunities, mentorship, and a safe, inclusive community, helping them overcome societal and institutional barriers, build confidence, and grow into future-ready leaders and changemakers in the technology space.
    </p>
  </div>
</div>


              <div className="org-stats-container">
                {[{ label: 'Members', value: '2000+' },
                  { label: 'Social Media', value: '11k+' },
                  { label: 'Mentorship Sessions', value: '26' },
                  { label: 'Coffee chats', value: '5' },
                  { label: 'Contests', value: '3' }].map((stat, idx) => (
                  <div className="card" key={idx}>
                    <div className="number">{stat.value}</div>
                    <div className="label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          
          </div>
        </div>

        <div className="cyber-gallery">
          <h2 className="gallery-title cyber-subheading">Inside Girls Leading Tech</h2>

          <div className="gallery-container">
            <button className="gallery-nav prev" onClick={prevImage} aria-label="Previous image">&lt;</button>

            <div className="gallery-main">
              <img
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                className="active-gallery-image"
                loading="lazy"
              />
            </div>

            <button className="gallery-nav next" onClick={nextImage} aria-label="Next image">&gt;</button>
          </div>

          <h3 className="gallery-subheading cyber-text-accent">{galleryImages[activeImage].alt}</h3>
        </div>

        <section className="testimonials-section">
          <div className="testimonials-header">
            <h2 className="cyber-heading">Community Voices</h2>
            <p className="cyber-subtitle">Hear what our members say about their Girls Leading Tech experience</p>
          </div>

          <div className="testimonials-grid">
            {reviews.slice(0, visibleReviews).map((review) => (
              <div className="testimonial-card" key={review.id}>
                <div className="testimonial-content">
                  <div className="quote-icon">“</div>
                  <p className="testimonial-text">{review.text}</p>
                </div>

                <div className="testimonial-author">
                  <div className="author-avatar">{review.author.split(' ').map(n => n[0]).join('')}</div>
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
              </div>
            ))}
          </div>

          {visibleReviews < reviews.length && (
            <button className="load-more" onClick={loadMoreReviews}>
              Show More Reviews <span className="cyber-arrow">→</span>
            </button>
          )}
        </section>
      </div>
    </section>
  );
};

export default OrganizationAbout;
