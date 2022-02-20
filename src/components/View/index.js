import React from 'react';
import PhotoList from '../PhotoList';
import About from '../About';
import Resume from '../Resume';
import ContactForm from '../Contact';

import { capitalizeFirstLetter } from '../../utils/helpers';

//Conditionally renders the correct view based on what is selected in Nav.
function View({ currentCategory }) {
  const { name, description } = currentCategory;

  if (currentCategory.name === 'About Me') {
    return <About />;
  } else if (currentCategory.name === 'resume') {
    return (
      <section>
        <h1 className="view-name">{capitalizeFirstLetter(name)}</h1>
        <p>{description}</p>
        <Resume />
        <PhotoList category={name} />
      </section>
    )
  } else if (currentCategory.name === 'contact') {
    return <ContactForm />;
  } else {
    return (
      <section>
        <h2 className="view-name">{description}</h2>
        <PhotoList category={name} />
      </section>
    )
  };
}

export default View;