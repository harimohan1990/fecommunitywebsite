import React from 'react';

import HariImg from '../../images/hari.jpg'

import Deepakimg from '../../images/deepakk.jpg'
import './Team.css'
export default function Team() {
  return (
    <section className="team-section">
      <p>Meet our team behind this</p>
      <div className="team-members">
        <div className="team-member">
          <img src={Deepakimg} alt="Team Member 1" />
          <p>UI Engineer </p>
          <a href="https://www.linkedin.com/in/depaksharma/">LinkedIn</a>
        </div>
        <div className="team-member">
          <img src={HariImg} alt="Team Member 2" />
          <p>UI Engineer</p>
          <a href="https://www.linkedin.com/in/hari-mohan-prajapat-47299b54/">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
