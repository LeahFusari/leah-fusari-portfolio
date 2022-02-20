import React from 'react';
import PhotoList from '../PhotoList';
import About from '../About';
import Resume from '../Resume';
import ContactForm from '../Contact';

import { capitalizeFirstLetter } from '../../utils/helpers';

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
        {/* <h1 className="view-name">{capitalizeFirstLetter(name)}</h1> */}
        <h2 className="view-name">{description}</h2>
        <PhotoList category={name} />
      </section>
    )
  };
}

// function View({ currentCategory }) {
//   const { name, description } = currentCategory;

//   if (currentCategory.name === 'About Me') {
//     return <About />;
//   } else if (currentCategory.name === 'resume') {
//     return (
//       <section>
//         <h1 className="view-name">{capitalizeFirstLetter(name)}</h1>
//         <p>{description}</p>
//         <Resume />
//         <PhotoList category={name} />
//       </section>
//     )
//   } else if (currentCategory.name === 'contact') {
//     return <ContactForm />;
//   } else {
//     return (
//       <section>
//         <h1 className="view-name">{capitalizeFirstLetter(name)}</h1>
//         <p className="view-name">{description}</p>
//         <PhotoList category={name} />
//       </section>
//     )
//   };
// }

export default View;