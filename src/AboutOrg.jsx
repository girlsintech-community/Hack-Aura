import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const OrganizationAbout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      text: `This community has helped me a lot in staying motivated, and I have also discovered many opportunities through it, that are very beneficial for me and my carrer. I would absolutely recommend that each and every girl should join this wonderful community.`,
      author: "Manisha HM",
      role: "https://www.linkedin.com/in/manisha-halale-69b541228",
      image: "/manisha.jpeg",
      location: "Karnataka, India",
    },
    {
      id: 2,
      text: `Girls Leading Tech is an incredible initiative that empowers girls to advance their careers by providing valuable technical knowledge. It's especially beneficial for female students looking to grow in the tech field. Let's grow and inspire each other!`,
      author: "PREMI SREE PRIYA T S",
      role: "https://www.linkedin.com/in/ts-premi-sree-priya-061a54293",
      image: "/premi.png",
      location: "Chennai, India",
    },
    {
      id: 3,
      text: `The mentors are exceptionally supportive, addressing all doubts and offering top-quality resources across both technical and non-technical domains. Their approachable and friendly nature fosters open communication, making it easy for members to interact.`,
      author: "Khushi Mittal",
      role: "https://www.linkedin.com/in/khushi-mittal-21b3ba246/",
      image: "/khushi.jpg",
      location: "Bhavnagar, India",
    },
  ];

  // Responsive slides calculation
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = reviews.length - slidesToShow;
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slidesToShow, reviews.length]);

  const nextSlide = () => {
    const maxSlide = reviews.length - slidesToShow;
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxSlide = reviews.length - slidesToShow;
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="organization" className="org-section">
      <div className="org-container">
        <div className="org-content">
          <div className="org-details">
            <div className="text-block">
              <div className="org-vision-section">
                <div className="vision-card">
                  <h3 className="vision-title">
                    <b>Vision</b>
                  </h3>
                  <p>
                    To build a world where every Indian girl—regardless of
                    background or resources—has equal access to opportunities,
                    the confidence to lead, and a strong support system to
                    thrive in technology and beyond. We envision girls not just
                    participating in tech, but leading it—empowered to pursue
                    dreams, uplift families, and shape an inclusive future.
                  </p>
                </div>
                <div className="vision-card">
                  <h3 className="vision-title">
                    <b>Mission</b>
                  </h3>
                  <p>
                    To empower Indian girls in tech by providing them with
                    access to resources, opportunities, mentorship, and a safe,
                    inclusive community, helping them overcome societal and
                    institutional barriers, build confidence, and grow into
                    future-ready leaders and changemakers in the technology
                    space.
                  </p>
                </div>
              </div>
              <div className="org-stats-container">
                {[
                  { label: "Members", value: "3000+" },
                  { label: "Social Media", value: "15k+" },
                  { label: "Mentorship Sessions", value: "34" },
                  { label: "Colleges Reached", value: "900+" },
                  { label: "States Reached", value: "25+" },
                ].map((stat, idx) => (
                  <div className="card" key={idx}>
                    <div className="number">{stat.value}</div>
                    <div>{stat.label}</div>
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
              Hear what our members say about their Girls Leading Tech
              experience
            </p>
          </div>

          <div
            className="testimonials-slider"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {reviews.length > slidesToShow && (
              <button
                className="slider-btn slider-btn-prev"
                onClick={prevSlide}
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <div className="slider-wrapper">
              <div
                className="testimonials-track"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / slidesToShow)
                  }%)`,
                  width: `${(reviews.length * 100) / slidesToShow}%`,
                }}
              >
                {reviews.map((review, index) => (
                  <div
                    className="testimonial-card"
                    key={index}
                    style={{ width: `${100 / reviews.length}%` }}
                  >
                    <div className="testimonial-content">
                      <div className="quote-icon">"</div>
                      <p className="testimonial-text">{review.text}</p>
                    </div>

                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <img
                          src={review.image}
                          alt={review.author}
                          className="avatar-img"
                          onError={(e) => {
                            e.target.src = "/default-avatar.png";
                          }}
                        />
                      </div>
                      <div className="author-info">
                        <h4 className="author-name">{review.author}</h4>
                        <p className="author-location">{review.location}</p>
                      </div>
                      <a
                        href={review.role}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-link"
                      >
                        <Linkedin size={20} color="#0077b5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {reviews.length > slidesToShow && (
              <button
                className="slider-btn slider-btn-next"
                onClick={nextSlide}
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {/* Dots Indicator */}
          {reviews.length > slidesToShow && (
            <div className="slider-dots">
              {Array.from({
                length: Math.ceil(reviews.length - slidesToShow + 1),
              }).map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      <style jsx>{`
        .org-section {
          width: 85%;
          max-width: 1200px;
          margin: 3rem auto;
          padding: 2.5rem;
          border-radius: 20px;
          color: #ffffff;
        }

        .org-container {
          width: 100%;
          margin: 0 auto;
        }

        /*  /Mission Cards */
        .org-vision-section {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .vision-card {
          flex: 1;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 16px;
          transition: transform 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .vision-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.2);
        }

        .vision-title {
          font-size: 1.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #06b6d4, #10b981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .vision-card p {
          font-size: 1rem;
          line-height: 1.8;
          color: #e0fdf4;
          text-align: justify;
        }

        /* Stats Section */
        .org-stats-container {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          margin: 3rem 0;
        }

        .card {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(6, 182, 212, 0.1);
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(6, 182, 212, 0.2);
        }

        .number {
          font-size: 1.8rem;
          font-weight: 800;
          color: #06b6d4;
          margin-bottom: 0.5rem;
        }

        .card div:last-child {
          font-size: 0.9rem;
          color: #a5b3c1;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Testimonials Section */
        .testimonials-section {
          margin: 4rem 0 2rem;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .cyber-heading {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #06b6d4, #10b981, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
        }

        .cyber-subtitle {
          font-size: 1.1rem;
          color: #a5b3c1;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Slider Styles */
        .testimonials-slider {
          position: relative;
          overflow: hidden;
          padding: 0 60px;
        }

        .slider-wrapper {
          overflow: hidden;
          border-radius: 16px;
        }

        .testimonials-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          gap: 2rem;
          padding: 1rem 0;
        }

        .testimonial-card {
          background: linear-gradient(
            135deg,
            rgba(6, 182, 212, 0.1),
            rgba(16, 185, 129, 0.1)
          );
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          flex-shrink: 0;
          box-sizing: border-box;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(6, 182, 212, 0.3);
          border-color: rgba(6, 182, 212, 0.4);
        }

        .testimonial-content {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .quote-icon {
          position: absolute;
          top: -20px;
          left: -10px;
          font-size: 4rem;
          color: rgba(6, 182, 212, 0.2);
          font-family: serif;
          font-weight: bold;
        }

        .testimonial-text {
          font-size: 1rem;
          line-height: 1.7;
          color: #e0fdf4;
          font-style: italic;
          padding-left: 1rem;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(6, 182, 212, 0.4);
          flex-shrink: 0;
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 0.2rem 0;
        }

        .author-location {
          font-size: 0.85rem;
          color: #a5b3c1;
          margin: 0;
        }

        .linkedin-link {
          padding: 0.5rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .linkedin-link:hover {
          background: rgba(0, 119, 181, 0.2);
          transform: scale(1.1);
        }

        /* Navigation Buttons */
        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: linear-gradient(
            135deg,
            rgba(6, 182, 212, 0.2),
            rgba(16, 185, 129, 0.2)
          );
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 10;
          color: #ffffff;
        }

        .slider-btn:hover {
          background: linear-gradient(
            135deg,
            rgba(6, 182, 212, 0.4),
            rgba(16, 185, 129, 0.4)
          );
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 5px 15px rgba(6, 182, 212, 0.3);
        }

        .slider-btn-prev {
          left: 0;
        }

        .slider-btn-next {
          right: 0;
        }

        /* Dots Indicator */
        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(6, 182, 212, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #06b6d4;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }

        .dot:hover {
          background: rgba(6, 182, 212, 0.6);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .org-vision-section {
            flex-direction: column;
            gap: 1.5rem;
          }

          .org-stats-container {
            grid-template-columns: repeat(3, 1fr);
          }

          .testimonials-slider {
            padding: 0 50px;
          }

          .slider-btn {
            width: 45px;
            height: 45px;
          }
        }

        @media (max-width: 768px) {
          .org-section {
            width: 95%;
            padding: 1.5rem;
            margin: 2rem auto;
          }

          .cyber-heading {
            font-size: 2rem;
          }

          .org-stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .testimonials-slider {
            padding: 0 40px;
          }

          .testimonials-track {
            gap: 1rem;
          }

          .testimonial-card {
            padding: 1.5rem;
          }

          .quote-icon {
            font-size: 3rem;
            top: -15px;
          }

          .testimonial-text {
            font-size: 0.9rem;
          }

          .author-avatar {
            width: 40px;
            height: 40px;
          }

          .author-name {
            font-size: 0.9rem;
          }

          .author-location {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 576px) {
          .org-stats-container {
            grid-template-columns: 1fr;
          }

          .testimonials-slider {
            padding: 0 30px;
          }

          .slider-btn {
            width: 40px;
            height: 40px;
          }

          .testimonial-card {
            padding: 1.2rem;
          }

          .cyber-heading {
            font-size: 1.8rem;
          }

          .cyber-subtitle {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .testimonials-slider {
            padding: 0 25px;
          }

          .slider-btn {
            width: 35px;
            height: 35px;
          }

          .slider-btn svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default OrganizationAbout;
