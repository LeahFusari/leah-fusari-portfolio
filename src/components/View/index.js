import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from "../../assets/images/projects/holiday-exchange.jpg";

// function View ({ currentCategory }) {
//   const { name, description } = currentCategory;
//   return (
//     <section>
//       <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
//       <p>{description}</p>
//       <PhotoList />
//     </section>
//   );
// }
function View({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={name} />
    </section>
  );
}

  export default View;