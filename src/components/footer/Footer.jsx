import React from 'react';
import { ContactSection } from '../contactForm/ContactSection';
import './footer.css';
import brandLogo from './../../assets/brandLogo.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={brandLogo} alt="Brand logo" />
          <div className='footer-links_logo_p'>
            <p>SOMETHING AG</p>
            <p>Dierfeldring 1.5</p>
            <p>54533 Dierfeld</p>
          </div>
        </div>
        <div className="footer-links_div">
          <h5>Links</h5>
          <p><a target="_blank" rel="noreferrer noopener" href="https://www.early911s.de/de/fahrzeuge/verkauf">Verkauf</a></p>
          <p><a target="_blank" rel="noreferrer noopener" href="https://www.porsche.com/germany/?referrer_url=https%3A%2F%2Fwww.porsche.com%2Finternational%2Faccessoriesandservice%2Fclassic%2F">Partner Forum</a></p>
          <p><a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/results?search_query=Porsche">Social Media</a></p>
        </div>
        <div className="footer-inaktivlinks_div">
          <h5>Unternehmen</h5>
          <p>Privacy Policy</p>
          <p>Ziele und Fakten</p>
          <p>Karriere</p>
        </div>
        <div className="footer-links_div">
          <ContactSection />
        </div>
      </div>

      <div className="footer-copyright">
        <p>@2024 SOMETHING. All rights reserved.</p>
      </div>
    </footer>
  );
}
