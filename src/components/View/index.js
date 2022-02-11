import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';
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
function View(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

  export default View;