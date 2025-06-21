import React from 'react';
import './CodeOfConduct.css';

const CodeOfConduct = () => {
  return (
    <section className="code-section" id="code-of-conduct">
      <h2 className="code-title">Code of Conduct</h2>
      <p className="code-intro">
        We are committed to providing a safe, welcoming, and inclusive environment for everyone. 
        All participants, speakers, sponsors, and volunteers must abide by the following code of conduct.
      </p>
      <ul className="code-list">
        <li>
          <span>Respect:</span> Treat all participants with dignity, empathy, and kindness. Discrimination or harassment of any form will not be tolerated.
        </li>
        <li>
          <span>Inclusivity:</span> We celebrate diversity and encourage participation from people of all backgrounds, identities, and skill levels.
        </li>
        <li>
          <span>Integrity:</span> Submit original work. Plagiarism, cheating, or sabotage is strictly prohibited.
        </li>
        <li>
          <span>Safety:</span> Report any behavior that makes you or others feel unsafe. Organizers will act swiftly to resolve issues.
        </li>
        <li>
          <span>Collaboration:</span> Help each other grow. Ask questions, share knowledge, and contribute positively to the community.
        </li>
      </ul>
      <p className="code-conclusion">
        Violations may result in removal from the event. If you experience or witness anything concerning, please contact the organizers immediately.
      </p>
    </section>
  );
};

export default CodeOfConduct;
