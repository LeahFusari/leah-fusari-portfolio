import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

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

  // return (
  //         <nav>
  //             <ul className="d-flex flex-row">
  //                 {categories.map((category) => (
  //                     <li className={`mx-1 ${
  //                         currentCategory.name === category.name && 'navActive'
  //                         }`} key={category.name}>
  //                       <span
  //                         onClick={() => {
  //                           setCurrentCategory(category)
  //                         }}
  //                       >
  //                         {capitalizeFirstLetter(category.name)}
  //                       </span>
  //                     </li>
  //                 ))}
  //             </ul>
  //         </nav>
  // );
}

export default Nav;