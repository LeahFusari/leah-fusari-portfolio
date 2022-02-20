import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

//define Props
function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;
 //changes the title in the tab to the component (View) you are in
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
//maps through and sets the categories (view titles) to display in the Nav list
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div>
        <ul className="navbar-nav">
          {categories.map((category) => (
            <li className={`nav-item ${currentCategory.name === category.name && 'navActive'
              }`} key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;