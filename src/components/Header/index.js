import React from 'react';
import Nav from '../Nav';


//header with embedded nav component using props from Nav.js

function Header(props) {
 return (
    <header >
     <div className='header-content container-fluid'>
       <a href="/">
         <h1 className= "my-name">Leah Fusari 🎸</h1>
       </a>
       <Nav
         categories={props.categories}
         setCurrentCategory={props.setCurrentCategory}
         currentCategory={props.currentCategory} 
         />
     </div>
     </header> 
   );

}

export default Header;