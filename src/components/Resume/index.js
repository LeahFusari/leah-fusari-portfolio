import React from 'react';
// import profileImage from "../../assets/images/LeahProfilePic.jpg";
import respdf from "../../assets/resume.pdf"


function Resume() {
    return (
      <div>
        <h1>Leah Fusari Resume</h1>
        <a href= {respdf} target="_blank" rel="noreferrer">Download resume here!</a>
      <section className="my-5">
        <div id= "resume" className="container-md">
          <h2>Web Development Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>React</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>RESTful API</li>
          </ul>
            <br></br> <br></br> 
         
        </div>
      </section>
      </div>
    );
  }
  
  export default Resume;