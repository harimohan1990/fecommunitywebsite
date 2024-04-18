import React from 'react';
import Infopage from '../../pages/infopage/Infopage';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <p>Get in Touch with query</p>
        <Infopage />
      </div>
    </footer>
  );
}
