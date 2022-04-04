import React from 'react';
import pdf from '../../images/Ava_Helgrave_Resume.pdf';

export default function Resume() {
  return (
    <div>
      <h2>My Resume</h2>
      <h4>Download My&nbsp;
        <a href={pdf} target="blank"
          >Resume</a
        >
      </h4>

      <h3>Front-End Proficiencies</h3>
      <ul>
        <li><h4>HTML</h4></li>
        <li><h4>CSS</h4></li>
        <li><h4>Javascript</h4></li>
        <li><h4>REACT</h4></li>
        <li><h4>Bootstrap</h4></li>
      </ul>

      <h3>Back-End Proficiencies</h3>
      <ul>
        <li><h4>APIs</h4></li>
        <li><h4>SQL/MySQL/Sequalize</h4></li>
        <li><h4>NodeJS</h4></li>
        <li><h4>Express</h4></li>
      </ul>


    </div>
  );
}
