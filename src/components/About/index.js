import React from 'react';
import profileImage from "../../assets/images/LeahProfilePic.jpg";

function About() {
  return (
    //CSS this div margin-top: 30px?
    <div className="container">
      <div className="row">
        <div className="about-section col-sm-12">
          <img className="p-img" src={profileImage} alt="cover" />
          <div className='blurb'>
          <p>Hello!  My name is Leah Fusari and I am currently enrolled in the University of Connecticut School of Engineering Coding Bootcamp to become a Full Stack Web Developer.  Please follow the link above to see my full resume and web proficiencies.
            <br></br> <br></br>
            In addition to my web development skills, I have served as a front line for clients, consumers, retailers and manufacturers with in-depth knowledge of various program components. I have performed multiple human resources and accounting functions and my ability to multi-task in a deadline-driven environment allows me to attain and exceed objectives.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// function About() {
//     return (
//       <div>
//         <h1 className="view-name">About Me</h1>
//       <section className="my-5">
//         <img src={profileImage} className="my-2" alt="cover" />
//         <div id= "about-text" className="container-md">
//           <p>Hello!  My name is Leah Fusari and I am currently enrolled in the University of Connecticut School of Engineering Coding Bootcamp to become a Full Stack Web Developer.  Please follow the link above to see my full resume and web proficiencies.
//             <br></br> <br></br>
//             In addition to my web development skills, I have served as a front line for clients, consumers, retailers and manufacturers with in-depth knowledge of various program components. I have performed multiple human resources and accounting functions and my ability to multi-task in a deadline-driven environment allows me to attain and exceed objectives.
//           </p>
//         </div>
//       </section>
//       </div>
//     );
//   }

export default About;