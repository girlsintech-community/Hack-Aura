import React, { useState } from 'react';
import './About.css';
import './Testimonials.css';


const OrganizationAbout = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(3);



  const reviews = [
    {
      id: 1,
      text: `This community has helped me a lot in staying motivated, and I've also discovered many opportunities through it. I would absolutely recommend that girls join this wonderful community.`,
      author: 'Manisha HM',
      role: 'https://www.linkedin.com/in/manisha-halale-69b541228',
      image:'../public/manisha.jpeg',
      location:'Karnataka, India',
    },
    {
      id: 2,
      text: `Girls Leading Tech is an incredible initiative that empowers girls to advance their careers by providing valuable technical knowledge. It’s especially beneficial for female students looking to grow in the tech field. Let’s grow and inspire each other!`,
      author: 'PREMI SREE PRIYA T S',
      role: 'https://www.linkedin.com/in/ts-premi-sree-priya-061a54293',
      image:'../public/premi.png',
      location:'Chennai, India',
    },
    {
      id: 3,
      text: `The mentors are exceptionally supportive, addressing all doubts and offering top-quality resources across both technical and non-technical domains. Their approachable and friendly nature fosters open communication, making it easy for members to interact and seek guidance.`,
      author: 'Khushi Mittal',
      role: 'https://www.linkedin.com/in/khushi-mittal-21b3ba246/',
      image:'../public/khushi.jpg',
      location:'Bhavnagar, India',
    },
  ];



  const loadMoreReviews = () => {
    setVisibleReviews((prev) => Math.min(prev + 3, reviews.length));
  };

  return (
    <section id="organization" className="org-section">
      <div className="org-container">
        <div className="org-content">


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
                {[{ label: 'Members', value: '2500+' },
                  { label: 'Social Media', value: '13k+' },
                  { label: 'Mentorship Sessions', value: '34' },
                  { label: 'Colleges Reached', value: '550+' },
                  { label: 'States Reached', value: '25+' }].map((stat, idx) => (
                  <div className="card" key={idx}>
                    <div className="number">{stat.value}</div>
                    <div className="">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          
          </div>
        </div>

        

        <section className="testimonials-section">
  <div className="testimonials-header">
    <h2 className="cyber-heading">Community Voices</h2>
    <p className="cyber-subtitle">
      Hear what our members say about their Girls Leading Tech experience
    </p>
  </div>

  <div className="testimonials-slider">
    <div className="testimonials-track">
      {[...reviews, ...reviews].map((review, index) => (
        <div className="testimonial-card" key={index}>
          <div className="testimonial-content">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">{review.text}</p>
          </div>

          <div className="testimonial-author">
            <div className="author-avatar">
              <img src={review.image} alt={review.author} className="avatar-img" />
            </div>
            <div className="author-info">
              <h4 className="author-name">{review.author}</h4>
              <p className="author-location">{review.location}</p>
              <div className="author-role">
                <a
                  href={review.role}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
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
  </div>
</section>

      </div>
    </section>
  );
};

export default OrganizationAbout;
