import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/images/projects/holiday-exchange.jpg";

function View (props) {
  const currentCategory = {
    name: "projects",
    description:
      "Web development projects that I have created or contributed to.",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
          <img
            src={photo}
            alt="example"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}


  export default View;