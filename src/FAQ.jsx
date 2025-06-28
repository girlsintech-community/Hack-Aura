import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is a Hackathon?",
    answer: "A hackathon is a time-bound innovation sprint where individuals or teams collaboratively build tech-based solutions to real-world problems. It fosters creativity, learning, and rapid prototyping in a high-energy environment."
  },
  {
    question: "Who can participate?",
    answer: "If you're a student (any course, any year, any college or any COUNTRY), you're IN.Just be ready to code, and maybe go slightly feral at 3 AM over a bug."
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
