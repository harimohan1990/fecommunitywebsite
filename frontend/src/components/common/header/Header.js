import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="logo">FE community</div>
      <nav>
        <ul>
          <li><a href="#">Who are we</a></li>
          <li><a href="#">Our Speakers</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Contact info</a></li>
        </ul>
      </nav>
    </header>
  );
}
