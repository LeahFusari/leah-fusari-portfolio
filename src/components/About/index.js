import React from 'react';
import profileImage from "../../assets/images/LeahProfilePic.jpg";


function About() {
    return (
      <div>
        <h1 className="view-name">About Me</h1>
      <section className="my-5">
        
        <img src={profileImage} className="my-2" alt="cover" />
        <div id= "about-text" className="container-md">
          <p>I am an experienced professional with proficiency in coordinating a variety of projects, managing training operations, and working with a wide customer base.
            <br></br> <br></br> 
            My knowledge includes providing technical training segments to new and existing employees, handling all aspects of operations site management, and serving as chief communication liaison.
            <br></br> <br></br> 
            I serve as a front line for clients, consumers, retailers and manufacturers with in-depth knowledge of various program components. I have performed multiple human resources and accounting functions and my ability to multi-task in a deadline-driven environment allows me to attain and exceed objectives.
            <br></br> <br></br> 
            I will be attending coding school in Sept 2021 with the goal of attaining a certificate in Full Stack coding and a career change to the Tech Industry.
            <br></br> <br></br> 
            My personal interests include but are not limited to:
            Music, rockhounding, camping, fishing, martial arts and visiting the mountains whenever possible.
          </p>
        </div>
      </section>
      </div>
    );
  }
  
  export default About;