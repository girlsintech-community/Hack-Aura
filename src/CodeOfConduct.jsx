import React from 'react';
import './CodeOfConduct.css';
import Navbar from './Navbar';

const CodeOfConduct = () => {
  return (
    <>
      <Navbar />

      <section className="code-section" id="code-of-conduct">
        <h2 className="code-title">CODE OF CONDUCT</h2>
        <p className="code-intro">
          Welcome to Hack Aura. This hackathon is not just about building innovative solutions, but about fostering a respectful, inclusive, and collaborative environment. We believe that great ideas come from diverse teams working together with mutual respect and understanding. Each team in our hackathon includes at least one girl member to ensure gender diversity and representation, and to promote equal participation and leadership.
          This Code of Conduct applies to all participants, organizers, volunteers, mentors, judges, and sponsors. By participating in this event, you agree to abide by the guidelines mentioned below.

        </p>
        <ul className="code-list">
          <li>
            <span className="abc">Respect:</span> Treat all participants with dignity, empathy, and kindness. Discrimination or harassment of any form will not be tolerated.
          </li>
          <li>
            <span className="abc">Inclusivity:</span> We celebrate diversity and encourage participation from people of all backgrounds, identities, and skill levels.
          </li>
          <li>
            <span className="abc">Integrity:</span> Submit original work. Plagiarism, cheating, or sabotage is strictly prohibited.
          </li>
          <li>
            <span className="abc">Safety:</span> Report any behavior that makes you or others feel unsafe. Organizers will act swiftly to resolve issues.
          </li>
          <li>
            <span className="abc">Collaboration:</span> Help each other grow. Ask questions, share knowledge, and contribute positively to the community.
          </li>
        </ul>
        <p className="code-conclusion">
          Violations may result in removal from the event. If you experience or witness anything concerning, please contact the organizers immediately.
        </p>
      </section>
    </>
  );
};

export default CodeOfConduct;
