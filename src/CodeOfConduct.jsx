import React, { useEffect } from 'react';
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
            Welcome to our Hackathon. This event is not just about building innovative solutions, but about fostering a respectful, inclusive, and collaborative environment.
            Each team includes at least one girl member to ensure gender diversity and equal participation. This Code of Conduct applies to all participants, organizers, volunteers, mentors, judges, and sponsors. By participating, you agree to the following:
          </p>

          <div className="code-block">
            <h3 className="abc">Our Values:</h3>
            <ul>
              <li>Everyone is welcome, regardless of experience level, gender, race, religion, age, sexual orientation, disability, or background.</li>
              <li>Respect, kindness, and inclusivity are non-negotiable. Every participant deserves to feel safe and valued.</li>
              <li>Collaboration is prioritized over competition for better outcomes.</li>
              <li>We are committed to maintaining a harassment-free environment.</li>
            </ul>
          </div>

          <div className="code-block">
            <h3 className="abc">Behavior Expectations:</h3>
            <ol>
              <li>Treat all participants with respect. Avoid interrupting or dismissing others.</li>
              <li>Communicate professionally and constructively. Avoid sarcasm or hostility.</li>
              <li>Ensure inclusive participation, especially of girl team members.</li>
              <li>Be open to diverse ideas and perspectives.</li>
              <li>Use appropriate language. Offensive remarks are not tolerated.</li>
              <li>Give and receive feedback respectfully.</li>
              <li>Celebrate differences and encourage diverse contributions.</li>
            </ol>
          </div>

          <div className="code-block">
            <h3 className="abc">Unacceptable Behavior:</h3>
            <ul>
              <li>Harassment, bullying, or discrimination in any form</li>
              <li>Verbal abuse, threats, or intimidation</li>
              <li>Sexual, racist, or discriminatory language or actions</li>
              <li>Unwanted physical contact</li>
              <li>Ignoring or dismissing team members based on gender or skill</li>
              <li>Sabotaging or undermining fellow participants</li>
            </ul>
            <p>If someone expresses discomfort with your behavior, stop immediately.</p>
          </div>

          <div className="code-block">
            <h3 className="abc">Inclusivity Commitment:</h3>
            <p>
              Every team must ensure all voices are heard. No member, especially the girl participant, should be sidelined or overruled. Everyone deserves to contribute and feel ownership.
            </p>
          </div>

          <div className="code-block">
            <h3 className="abc">Teamwork and Mental Well-being:</h3>
            <ul>
              <li>Support teammates in learning and problem-solving</li>
              <li>Take care of your physical and mental health (rest, eat, hydrate)</li>
              <li>Avoid glorifying overwork and burnout</li>
              <li>Celebrate both individual and team progress</li>
            </ul>
            <p>Winning is not the only goal—growth and collaboration matter too.</p>
          </div>

          <div className="code-block">
            <h3 className="abc">Reporting and Resolution:</h3>
            <p>
              If you face or witness misconduct, report it to the organizing team—anonymously or directly. All reports will be treated seriously and confidentially.
    Organizers may take actions like verbal warnings, removal from the event, or disqualification.</p>
          </div>

          <p className="code-conclusion">
            This hackathon is built on trust, respect, and shared purpose. Let's create a space where everyone feels proud, heard, and empowered to build something impactful together.
          </p>
        </section>
      </div>
    </>
  );
};

export default CodeOfConduct;
