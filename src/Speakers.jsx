import React from "react";
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Twitter from 'lucide-react/dist/esm/icons/twitter';
import "./Speakers.css";

const speakers = [
  // Non-Indians (international speakers)
  {
    name: "Matilde Silva",
    role: "Comunity Strategist Advisor",
    org: "H.E.R DAO",
    image: "/images/speakers/Matilde Silva.jpeg",
    linkedin: "https://www.linkedin.com/in/matildecsilva/",
    email: "whtifigo@gmail.com"
  },
  {
    name: "Rieselle Saure",
    role: "Lead Community Ambassador",
    org: "Core DAO/Base PH",
    image: "/images/speakers/Rieselle Saure.jpeg",
    twitter: "@rie_1497",
    email: "riewagmi@gmail.com"
  },
  {
    name: "Francesco Ciulla",
    role: "Developer Advocate",
    org: "daily.dev",
    image: "/images/speakers/Francesco Ciulla.jpeg",
    twitter: "@Francescociull4"
  },
  {
    name: "Dr. Krishna Rao Kathala",
    role: "Senior Researcher (TDAI)",
    org: "The Ohio State University",
    image: "/images/speakers/Dr. Krishna Chaitanya Rao Kathala.jpg",
    linkedin: "https://www.linkedin.com/in/krishnachaitanyarao/"
  },
  {
    name: "Yajur Bajaj",
    role: "AI Product Manager",
    org: "Dubai Holding",
    image: "/images/speakers/Yajur Bajaj.jpeg",
    linkedin: "https://www.linkedin.com/in/yajurbajaj/"
  },
  // FAANG (Adobe, Microsoft)
  {
    name: "Nandini Taneja",
    role: "Software Engineer",
    org: "Microsoft",
    image: "/images/speakers/Nandini_Taneja.jpg",
    linkedin: "https://linkedin.com/in/nandini-taneja4"
  },
  {
    name: "Preetish Kakkar",
    role: "Senior Computer Graphics Engineer",
    org: "Adobe",
    image: "/images/speakers/Preetish Kakkar.jpeg",
    linkedin: "https://www.linkedin.com/in/preeteesh/"
  },
  {
    name: "Arushi Garg",
    role: "SDE-1",
    org: "Adobe",
    image: "/images/speakers/Arushi Garg.jpeg",
    linkedin: "https://www.linkedin.com/in/arushi-garg105"
  },
  // MNCs (Mastercard, Grid Dynamics, Orkes, bytexl, Cloudroit, The Cloud Ops Community)
  {
    name: "Anubha Pandey",
    role: "Data Science Manager",
    org: "Mastercard",
    image: "/images/speakers/Anubha Pandey.jpeg",
    linkedin: "https://www.linkedin.com/in/anubha-pandey-294747161/",
    email: "anubha.pandey@mastercard.com"
  },
  {
    name: "Unnati",
    role: "Data Scientist",
    org: "Grid Dynamics",
    image: "/images/speakers/Unnati.jpeg",
    twitter: "unnati_twts",
    email: "cunnati@griddynamics.com"
  },
  {
    name: "Riza Farheen",
    role: "Developer Advocate",
    org: "Orkes",
    image: "/images/speakers/Riza Farheen.png",
    linkedin: "https://www.linkedin.com/in/riza-farheen/"
  },
  {
    name: "Gurtej Singh",
    role: "Senior Manager - Strategy & Growth",
    org: "bytexl",
    image: "/images/speakers/Gurtej Singh.JPG",
    linkedin: "https://www.linkedin.com/in/gurtej-singh-cse/"
  },
  {
    name: "Praveen Kumar Purushothaman",
    role: "Director",
    org: "Cloudroit",
    image: "/images/speakers/Praveen Kumar Purushothaman.png",
    linkedin: "https://www.linkedin.com/in/praveentech/"
  },
  {
    name: "Souradip Pal",
    role: "Applied AI Eng.",
    org: "The Cloud Ops Community",
    image: "/images/speakers/souradip pal.jpg",
    linkedin: "https://www.linkedin.com/in/souradip-pal-codes/"
  },
  {
    name: "Aditi Tiwari",
    role: "Founder",
    org: "Sia Health",
    image: "/images/speakers/Aditi Tiwari.jpeg",
    twitter: "iamaditi007"
  },
  {
    name: "Kanishk Khurana",
    role: "Developer Relations Engineer",
    org: "Across Protocol",
    image: "/images/speakers/Kanishk Khurana.jpeg",
    twitter: "@kanishkkhurana_"
  },
  // Others
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
    name: "Ankush Dharkar",
    role: "Founder Coach",
    org: "Real Dev Squad",
    image: "/images/speakers/Ankush Dharkar.jpeg",
    twitter: "ankushdharkar",
    email: "ankushdharkar@gmail.com"
  },
  {
    name: "Rudrakshi",
    role: "Intern - Community Manager",
    org: "TechKareer",
    image: "/images/speakers/Rudrakshi.jpeg",
    twitter: "rudythetechy"
  },
  {
    name: "Narayani Gurunathan",
    role: "Consultant - Careers",
    org: "Self Employed",
    image: "/images/speakers/Narayani Gurunathan.jpeg",
    twitter: "@Narayani07"
  },
  {
    name: "Ayush Chugh",
    role: "Full Stack Developer",
    org: "Avenue Tickets | CGC Landran",
    image: "/images/speakers/Ayush Chugh.jpeg",
    twitter: "aayushchugh_x",
    email: "hey@ayushchugh.com"
  },
  {
    name: "Ayush Kumar Prajapati",
    role: "Outreach partner",
    org: "Market mafiaa",
    image: "/images/speakers/Ayush kumar prajapati.jpg",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-prajapati-82546235a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Pankaj Rai",
    role: "GDE Android, Firebase and AI",
    org: "",
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
    name: "Shivam Chhirolya",
    role: "Senior ML Scientist",
    org: "Prezent.ai",
    image: "/images/speakers/Shivam Chhirolya.jpeg",
    linkedin: "https://www.linkedin.com/in/shivam-chhirolya/"
  },
  {
    name: "Manik",
    role: "Business Development Manager",
    org: "BlockOn Ventures",
    image: "/images/speakers/Manik.jpeg",
    twitter: "@themanikdiaries",
    email: "Manik23265@gmail.com"
  },
  {
    name: "Kaushika Anandharaman",
    role: "Core SWE Developer",
    org: "Stealth Startup",
    image: "/images/speakers/Kaushika Anandharaman.png",
    linkedin: "https://www.linkedin.com/in/kaushika-anandharaman/"
  },
  {
    name: "Isha Parekh",
    role: "jr. Devrel",
    org: "Pinch / Charusat",
    image: "/images/speakers/Isha Parekh.jpeg",
    twitter: "https://x.com/iishaparekh"
  },
  {
    name: "Ankita Tripathi",
    role: "CEO",
    org: "Nuvoarc",
    image: "/images/speakers/Ankita Tripathi.jpeg",
    twitter: "ankitatr_"
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
      {speaker.twitter && (
        <a
          href={`https://twitter.com/${speaker.twitter.replace(/^@/, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="speaker-linkedin">
          <Twitter size={18} /> Twitter
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
