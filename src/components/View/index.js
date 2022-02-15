import React from 'react';
import PhotoList from '../PhotoList';
import About from '../About';
import Resume from '../Resume';

import { capitalizeFirstLetter } from '../../utils/helpers';

function View({ currentCategory }) {
  const { name, description } = currentCategory;

  if (currentCategory.name === 'About Me') {
    return <About />;
  } else if (currentCategory.name === 'Resume'){
    return <Resume />;
  }else {
    return (
      <section>
        <h1>{capitalizeFirstLetter(name)}</h1>
        <p>{description}</p>
        <PhotoList category={name} />
      </section>
    )
  };
}

export default View;