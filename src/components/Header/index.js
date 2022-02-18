import React from 'react';
import Nav from '../Nav';

function Header(props) {
  console.log(props)
  return (
   <header>
    <h1 className='d-flex flex-row'>
      <a href="/">
        <span role="img" aria-label="guitar"> </span> Leah Fusari 🎸
      </a>
      <h3>
      <Nav
        categories={props.categories}
        setCurrentCategory={props.setCurrentCategory}
        currentCategory={props.currentCategory} 
        />
        </h3>
    </h1>
    </header> 
  );
}

export default Header;