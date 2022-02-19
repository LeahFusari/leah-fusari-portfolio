import React from 'react';
import Nav from '../Nav';

function Header(props) {
  console.log(props)
  return (
   <header>
    <div className='header-div d-flex flex-row'>
      <a href="/">
        <h1 className= "my-name">Leah Fusari 🎸</h1>
      </a>
      <h3>
      <Nav
        categories={props.categories}
        setCurrentCategory={props.setCurrentCategory}
        currentCategory={props.currentCategory} 
        />
        </h3>
    </div>
    </header> 
  );
}

export default Header;