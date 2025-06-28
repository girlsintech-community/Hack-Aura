import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>HackAura</h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/girlsleadingtech" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.15.0/linkedin.svg"
                alt="LinkedIn"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <svg style={{ display: 'none' }} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a href="https://x.com/GirlLeadingTech" target="_blank" rel="noopener noreferrer" title="Twitter/X">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.15.0/x.svg"
                alt="Twitter/X"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <svg style={{ display: 'none' }} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/girlsleadingtech" target="_blank" rel="noopener noreferrer" title="Instagram">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.15.0/instagram.svg"
                alt="Instagram"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <svg style={{ display: 'none' }} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a href="https://youtube.com/@girlsleadingtech?si=wH2WRVdMe4cDrdbF" target="_blank" rel="noopener noreferrer" title="YouTube">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.15.0/youtube.svg"
                alt="YouTube"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <svg style={{ display: 'none' }} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a2.961 2.961 0 00-2.08-2.096C19.604 3.5 12 3.5 12 3.5s-7.604 0-9.418.59A2.961 2.961 0 00.502 6.186C0 8.004 0 12 0 12s0 3.996.502 5.814a2.961 2.961 0 002.08 2.096c1.814.59 9.418.59 9.418.59s7.604 0 9.418-.59a2.961 2.961 0 002.08-2.096C24 15.996 24 12 24 12s0-3.996-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>


            <a href="https://discord.gg/P8QY7Xgg" target="_blank" rel="noopener noreferrer" title="Discord">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.15.0/discord.svg"
                alt="Discord"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <svg style={{ display: 'none' }} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>

            <a href="https://whatsapp.com/channel/0029VayYXL4K5cD7Zrzq052G" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.15.0/whatsapp.svg"
                alt="WhatsApp"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <svg style={{ display: 'none' }} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15s-.767.967-.94 1.165c-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.203-.242-.58-.487-.502-.67-.512l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.29.173-1.412-.074-.123-.272-.198-.57-.347zm-5.421 6.53h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.437-9.884 9.888-9.884a9.82 9.82 0 0 1 6.993 2.897 9.823 9.823 0 0 1 2.893 6.994c-.003 5.45-4.438 9.884-9.889 9.884zM12.003 1.5C6.201 1.5 1.5 6.201 1.5 12c0 2.094.547 4.112 1.588 5.902L1 23l5.208-1.372A10.47 10.47 0 0 0 12.003 22.5c5.801 0 10.502-4.701 10.502-10.5 0-2.807-1.094-5.445-3.082-7.433A10.46 10.46 0 0 0 12.003 1.5z" />
              </svg>
            </a>

          </div>
        </div>

        <div className="footer-right">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#timeline">Timeline</a></li>
            <li><a href="/#sponsors">Sponsors</a></li>
            <li><a href="/humans">Humans of HackAura</a></li>
            <li><a href="/#faq">FAQ</a></li>
            <li><a href="/code-of-conduct">Code of Conduct</a></li>
            <li><a href="/code-of-conduct">Brand Assets</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-signature">
  Made with <span role="img" aria-label="love">❤️</span> by&nbsp;
  <a href="https://www.linkedin.com/in/bagavati-narayanan-98484b292/" target="_blank" rel="noopener noreferrer">Bagavati</a> ,&nbsp;
  <a href="https://www.linkedin.com/in/adyashadas04/" target="_blank" rel="noopener noreferrer">Adyasha</a> &amp;&nbsp;
  <a href="https://www.linkedin.com/in/kashikagupta/" target="_blank" rel="noopener noreferrer">Kashika</a>
</div>

    </footer>
  );
}

export default Footer;