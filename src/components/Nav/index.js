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
            <nav>
              <h1>
            <a href="/">
                  <span role="img" aria-label="guitar"> </span> Leah Fusari 🎸
              </a>
          </h1>
                <ul className="flex-row">
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
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
                    {/* <li>
                        <span>Contact</span>
                    </li> */}
                </ul>
            </nav>
    );
}

export default Nav;