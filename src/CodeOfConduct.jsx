import React, { useEffect, useRef } from 'react';
import './CodeOfConduct.css';
import Navbar from './Navbar';

const CodeOfConduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="code-container">
        <section className="code-section" id="code-of-conduct">
          <h2 className="code-title">CODE OF CONDUCT</h2>
          <p className="code-intro">
           Welcome to our Hackathon. This event is not just about building innovative solutions, but about fostering a respectful, inclusive, and collaborative environment. We believe that great ideas come from diverse teams working together with mutual respect and understanding. Each team in our hackathon includes at least one girl member to ensure gender diversity and representation, and to promote equal participation and leadership.
This Code of Conduct applies to all participants, organizers, volunteers, mentors, judges, and sponsors. By participating in this event, you agree to abide by the guidelines mentioned below.

          </p>
          <ul className="code-list">
            <li><span className="abc">Our Values:</span>
-Everyone is welcome, regardless of experience level, gender, race, religion, age, sexual orientation, disability, or background.
- Respect, kindness, and inclusivity are non-negotiable. Every participant deserves to feel safe and valued.
- Collaboration is prioritized over competition. We believe that the best outcomes arise from working together with openness and support.
- We are committed to maintaining a harassment-free environment for everyone.
</li>
            <li><span className="abc">Behavior Expectations:</span>
1. Treat all participants with respect. Do not interrupt, talk over, or dismiss anyone’s ideas or presence.
2. Communicate professionally and constructively. Avoid sarcasm, personal attacks, or hostile remarks.
3. Be inclusive. Ensure that every team member, especially girl members, have equal opportunities to contribute and lead.
4. Be open to diverse ideas and different ways of thinking.
5. Use appropriate language at all times. Offensive or suggestive remarks will not be tolerated.
6. Give and receive feedback respectfully.
7. Celebrate differences. Diverse teams are stronger and more creative.
</li>
            <li><span className="abc">Unacceptable Behavior
We have zero tolerance for the following:</span>
We have zero tolerance for the following:
- Harassment, bullying, or discrimination in any form
- Verbal abuse, threats, or intimidation
- Sexual, racist, or discriminatory language, jokes, or actions
- Unwanted physical contact
- Dismissing or ignoring team members based on gender or perceived skill level
- Sabotaging, excluding, or undermining fellow participants
If someone tells you that your behavior is making them uncomfortable, stop immediately.
</li>
            <li><span className="abc">Inclusivity Commitment:</span>
Each team must ensure that all voices are heard. No member, especially the girl participant, should be sidelined, overruled, or ignored. Everyone has the right to speak, contribute, and feel ownership over the work created.
</li>
            <li><span className="abc">Teamwork and Mental Well-being:</span> 
We expect participants to:
- Support each other in learning and problem-solving
- Take care of their physical and mental health (rest, eat, hydrate)
- Be mindful of burnout and avoid glorifying overwork
- Celebrate both individual and team progress
Winning is not the only goal. Growth, collaboration, and experience matter equally.
</li>

          </ul>
          <p className="code-conclusion">
            Violations may result in removal from the event...
          </p>
        </section>
      </div>
    </>
  );
};

export default CodeOfConduct;