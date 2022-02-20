import React from 'react';
import respdf from "../../assets/resume.pdf"

//Resume component with link to dwonloadable resume
function Resume() {
    return (
      <div>
        
      <div className="view-name">
        <a className='blinking'  href= {respdf} target="_blank" rel="noreferrer">Click here to view and download my resume!</a>
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