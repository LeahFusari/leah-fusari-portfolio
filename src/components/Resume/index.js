import React from 'react';
// import profileImage from "../../assets/images/LeahProfilePic.jpg";
import respdf from "../../assets/resume.pdf"
// import PhotoList from '../PhotoList';


function Resume() {
    return (
      <div>
      <div>
        <h1>Leah Fusari Resume</h1>
        <a href= {respdf} target="_blank" rel="noreferrer">Download resume here!</a>
        </div>

      <section className="my-5">
        <div id= "resume" className="container-md">
          <h2>Web Development Proficiencies</h2>
          </div>
      </section>
      </div>
    
    );
  }
  
  export default Resume;