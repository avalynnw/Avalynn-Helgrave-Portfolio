import React from 'react';

export default function About() {
  return (
    <div>
      <h2>About Me</h2>

      <img id="profile_pic" src={require("../../images/my_pic.jpg")} alt="Avalynn Helgrave"></img>

      <p>
      I earned a Bachelor's degree in electrical engineering from Montana State University in 2019. I am currently working towards finding employment in the computer science field. My interests are video game and app development.
      </p>
    </div>
  );
}
