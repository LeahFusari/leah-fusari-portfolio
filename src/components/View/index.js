import React from 'react';
import PhotoList from '../PhotoList';
import About from '../About';
import { capitalizeFirstLetter } from '../../utils/helpers';

function View({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={name} />
      <About/>
    </section>
  );
}

  export default View;