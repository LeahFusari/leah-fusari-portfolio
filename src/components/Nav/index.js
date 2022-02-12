import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  
    // const [currentCategory, setCurrentCategory] = useState(categories[0]);
    // const [categories] = useState([
    //     {
    //         name: "Portfolio",
    //         description: "Website projects that I have built or contributed to.",
    //     },
    //     {
    //         name: "Interests",
    //         description: "Some of my non-web development interests."
    //     },
    //     {
    //         name: "Resume",
    //         description: "My downloadable resume.",
    //     },
    // ]);

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    //   }
        const {
          categories = [],
          setCurrentCategory,
          currentCategory,
        } = props;

        useEffect(() => {
            document.title = capitalizeFirstLetter(currentCategory.name);
          }, [currentCategory]);
          
    return (
        // <header className="flex-row px-1">
        //     <h2>
        //         <a href="/">
        //             <span role="img" aria-label="guitar"> </span> Leah Fusari 🎸
        //         </a>
        //     </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About Me</a>
                    </li>
                    
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
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        // </header>
    );
}

export default Nav;