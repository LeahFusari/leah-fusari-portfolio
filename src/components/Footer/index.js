import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Thank you for visiting.  Please click the links for more info.</span>
        </div>

        <div className='foot-anchor-container'>
          <a className="me-4" href="https://github.com/LeahFusari" target="_blank" rel="noreferrer">Github</a>
          <a className="me-4" href="https://www.linkedin.com/in/leah-fusari-79b35821b/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="me-4" href="https://stackoverflow.com/users/18217848/leah-fusari" target="_blank" rel="noreferrer">StackOverflow</a>
        </div>
      </div>
    </footer>
  );
}

// function Footer() {
//   return (
//     <footer>
//     <div>
//         <h4>Thank you for visiting! Please check out my links!</h4>
//     </div>
//     <div className='foot-anchor-container'>
//       <a href= "https://github.com/LeahFusari" target="_blank" rel="noreferrer">Github</a>
//       <a href= "https://www.linkedin.com/in/leah-fusari-79b35821b/" target="_blank" rel="noreferrer">LinkedIn</a>
//       <a href= "https://stackoverflow.com/users/18217848/leah-fusari" target="_blank" rel="noreferrer">StackOverflow</a>
//     </div>
//     </footer>
//   );
// }

export default Footer;