import React from 'react';
import './Speaker.css';
import Q1 from '../../images/questonmark1.png'

import Q2 from '../../images/questonmark2.png'

export default function Speakers() {
  return (
    <section className="speakers-section">
      <div className="intro">
        <p><b>Big round of applause for our speakers here</b></p>
        <p><b>Topic taken is : "hello"</b></p>
      </div>
      <div className='speaker-container'>
      <div className="speaker">
        <img src={Q1} alt="speaker2" />
        <p>position </p>
          <a href="/">LinkedIn</a>
      </div>
      <div className="speaker">
      <img src={Q2} alt="speaker2" />
          <p>UI Engineer</p>
          <a href="/">LinkedIn</a>
      </div>
      </div>
    </section>
  );
}
