import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is a Hackathon?",
    answer: "A hackathon is a time-bound innovation sprint where individuals or teams collaboratively build tech-based solutions to real-world problems. It fosters creativity, learning, and rapid prototyping in a high-energy environment."
  },
  {
    question: "Who can participate?",
    answer: "If you're a student (any course, any year, any college or any COUNTRY), you're IN. Just be ready to code, and maybe go slightly feral at 3 AM over a bug."
  },
  {
    question: "Team size?",
    answer: "Max: 5 Min: 2 There’s a catch! – There SHOULD be at least one Girl in the Team!"
  },
  {
    question: "Can I team up with people from other colleges/branches/years?",
    answer: "Yes, yes and YES!!! You can absolutely team up with anyone who’s also a student."
  },
  {
    question: "What are the tracks?",
    answer: "You can build your project in any of these zones: AI/ML Web3 Open Innovation (Whatever your brain cooks!)"
  },
  {
    question: " Can we code before the hackathon starts?",
    answer: "A BIG NO. No pre-coding is allowed. You can brainstorm, make a figma, or even build your team playlist, but the actual coding starts only when we say so! We will check your commit history."
  },
  {
    question:"Are there prizes?",
    answer: "Will be revealed soon…"
  },
  {
    question: "Where do we talk?",
    answer: "We’ll be ready to guide on our socials mentioned in the footer along with links."
  },
  {
    question: "How do I register?",
    answer: "Easy-peasy. Click https://hackaura.devfolio.co/ and vibe with the form. Takes 2 mins, tops."
  },
  {
    question: "How do we submit?",
    answer: "We’ll send submission steps closer to the date."
  },
  {
    question: "I’ve never done a hackathon before. Should I still join?",
    answer: "Yes, because if not now, then when? Form a team and hit that register button!"
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
