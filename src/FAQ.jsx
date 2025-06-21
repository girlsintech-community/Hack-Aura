import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is HackAura?",
    answer: "HackAura is a 24-hour online hackathon focused on innovation, creativity, and impactful problem-solving in the tech space."
  },
  {
    question: "Who can participate?",
    answer: "Anyone passionate about technology — students, developers, designers, or hobbyists — can participate from anywhere in the world."
  },
  {
    question: "Is there any registration fee?",
    answer: "Nope! HackAura is completely free for all participants."
  },
  {
    question: "Where will the hackathon take place?",
    answer: "HackAura will be conducted entirely online. All communication, submissions, and sessions will be held virtually."
  },
  {
    question: "What do I need to participate?",
    answer: "A working internet connection, a laptop or PC, and lots of enthusiasm! We recommend joining our Discord for smooth coordination."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <h2>FAQs</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-header">
              <div className="faq-question">{faq.question}</div>
              <div className="faq-arrow">
                {openIndex === index ? '▴' : '▾'}
              </div>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
