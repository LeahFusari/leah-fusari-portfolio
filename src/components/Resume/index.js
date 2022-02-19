import React from 'react';
import respdf from "../../assets/resume.pdf"

function Resume() {
    return (
      <div>
      <div className="view-name">
        <a href= {respdf} target="_blank" rel="noreferrer">Download my resume here!</a>
        </div>

      <section className="my-5">
        <div id= "resume" className="container-md">
          <h2 className="view-name">Web Development Proficiencies</h2>
          </div>
      </section>
      </div>
    
    );
  }
  
  export default Resume;