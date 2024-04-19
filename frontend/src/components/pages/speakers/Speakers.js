import React from 'react';
import './Speaker.css';
import Q1 from '../../images/questonmark1.png'
import Q2 from '../../images/questonmark2.png'

export default function Speakers() {
  return (
    <section className="speakers-section">
      <div className="intro">
        <p><b>Big round of applause for our speakers here</b></p>
        <p><b>Topic taken is : Interview Questions gatheration</b></p>
      </div>
      <div className='speaker-container'>
      <div className="speaker">
        <img src={Q1} alt="speaker2" />
        <p>Pratham singh, UI Engineer</p>
          <a href="https://www.linkedin.com/in/pratham-singh-253442181/">Pratham singh  </a>
      </div>
      <div className="speaker">
      <img src={Q2} alt="speaker2" />
          <p>Anubhav Trivedi, UI Engineer</p>
          <a href="https://www.linkedin.com/in/anubhav-trivedi/">Anubhav Trivedi</a>
      </div>
      </div>
    </section>
  );
}
