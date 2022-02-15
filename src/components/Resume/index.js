import React from 'react';
import respdf from "../../assets/resume.pdf"

function Resume() {
    return (
      <div>
      <div>
        <a href= {respdf} target="_blank" rel="noreferrer">Download my resume here!</a>
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