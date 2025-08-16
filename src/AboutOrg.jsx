import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import "./AboutOrg.css";

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
                    To build a world where every Indian girl - regardless of
                    background or resources - has equal access to opportunities,
                    the confidence to lead, and a strong support system to
                    thrive in technology and beyond. We envision girls not just
                    participating in tech, but leading it - empowered to pursue
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
                    future - ready leaders and changemakers in the technology
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
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[...reviews, ...reviews].map((review, index) => (
                <div
                  className="testimonial-card"
                  key={index}
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
        </section>
      </div>


    </section>
  );
};

export default OrganizationAbout;
