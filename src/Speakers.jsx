import React from "react";
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import "./Speakers.css";

const speakers = [
  {
    name: "Mohammad Danish",
    role: "Program Manager",
    org: "CodeWave Hub",
    image: "/images/speakers/Mohammad Danish.png",
    linkedin: "https://www.linkedin.com/in/mohammad-danish-535028294"
  },
  {
    name: "Mannan Tyagi",
    role: "Student",
    org: "Bennett University",
    image: "/images/speakers/Mannan Tyagi.jpg",
    linkedin: "https://www.linkedin.com/in/mannantyagi/"
  },
  {
    name: "Nandini Taneja",
    role: "Software Engineer",
    org: "Microsoft",
    image: "/images/speakers/Nandini_Taneja.jpg",
    linkedin: "https://linkedin.com/in/nandini-taneja4"
  },
  {
    name: "Ayush kumar prajapati",
    role: "Outreach partner",
    org: "Market mafiaa",
    image: "/images/speakers/Ayush kumar prajapati.jpg",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-prajapati-82546235a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Praveen Kumar Purushothaman",
    role: "Director of Engineering",
    org: "Cloudroit",
    image: "/images/speakers/Praveen Kumar Purushothaman.png",
    linkedin: "https://www.linkedin.com/in/praveentech/"
  },
  {
    name: "Pankaj Rai",
    role: "GDE Android, Firebase and AI",
    org: "N/A",
    image: "/images/speakers/Pankaj Rai.JPG",
    linkedin: "https://in.linkedin.com/in/pankajrai16"
  },
  {
    name: "Sanjit Singh",
    role: "Co-Founder",
    org: "Valkyra Technologies",
    image: "/images/speakers/sanjit singh.jpg",
    linkedin: "https://www.linkedin.com/in/sanjit-singh-66374b6a/"
  },
  {
    name: "Chhavi Garg",
    role: "Co-founder",
    org: "Arexa & Bharat XR",
    image: "/images/speakers/Chhavi Garg.jpg",
    linkedin: "https://www.linkedin.com/in/chhaviGG"
  },
  {
    name: "Preetish Kakkar",
    role: "Senior Computer Graphics Engineer",
    org: "Adobe",
    image: "/images/speakers/Preetish Kakkar.jpeg",
    linkedin: "https://www.linkedin.com/in/preeteesh/"
  },
  {
    name: "Dr. Krishna Chaitanya Rao Kathala",
    role: "Senior Researcher and Education Lead (TDAI)",
    org: "The Ohio State University",
    image: "/images/speakers/Dr. Krishna Chaitanya Rao Kathala.jpg",
    linkedin: "https://www.linkedin.com/in/krishnachaitanyarao/"
  },
  {
    name: "Arushi Garg",
    role: "SDE-1",
    org: "Adobe",
    image: "/images/speakers/Arushi Garg.jpeg",
    linkedin: "https://www.linkedin.com/in/arushi-garg105"
  },
  {
    name: "souradip pal",
    role: "Applied AI Eng.",
    org: "The Cloud Ops Community",
    image: "/images/speakers/souradip pal.jpg",
    linkedin: "https://www.linkedin.com/in/souradip-pal-codes/"
  },
  {
    name: "Gurtej Singh",
    role: "Senior Manager - Strategy & Growth",
    org: "bytexl",
    image: "/images/speakers/Gurtej Singh.JPG",
    linkedin: "https://www.linkedin.com/in/gurtej-singh-cse/"
  },
  {
    name: "Yajur Bajaj",
    role: "AI Product Manager",
    org: "Dubai Holding",
    image: "/images/speakers/Yajur Bajaj.jpeg",
    linkedin: "https://www.linkedin.com/in/yajurbajaj/"
  },
  {
    name: "Riza Farheen",
    role: "Developer Advocate",
    org: "Orkes",
    image: "/images/speakers/Riza Farheen.png",
    linkedin: "https://www.linkedin.com/in/riza-farheen/"
  },
  {
    name: "Shivam Chhirolya",
    role: "Senior ML Scientist",
    org: "Prezent.ai",
    image: "/images/speakers/Shivam Chhirolya.jpeg",
    linkedin: "https://www.linkedin.com/in/shivam-chhirolya/"
  }
];

const SpeakerCard = ({ speaker }) => (
  <div className="speaker-card">
    <img src={speaker.image} alt={speaker.name} className="speaker-img" />
    <div className="speaker-info">
      {speaker.linkedin && (
        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="speaker-linkedin">
          <Linkedin size={18} /> LinkedIn
        </a>
      )}
      <h3 className="speaker-name">{speaker.name}</h3>
      <div className="speaker-role-org">
        <span className="speaker-role">{speaker.role}</span>
        <span className="speaker-org">{speaker.org}</span>
      </div>
    </div>
  </div>
);

const Speakers = () => (
  <section className="speakers-section">
    <div className="speakers-heading-bar">
      <h2 className="speakers-title">OUR SPEAKERS</h2>
      <div className="speakers-underline"></div>
    </div>
    <div className="speakers-grid">
      {speakers.map((speaker, idx) => (
        <SpeakerCard key={idx} speaker={speaker} />
      ))}
    </div>
  </section>
);

export default Speakers;
