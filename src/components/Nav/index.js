import React from 'react';

function Nav() {
    const sections = [
        {
            name: "Portfolio",
            description: "Website projects that I have built or contributed to.",
        },
        {
            name: "Interests",
            description: "Some of my non-web development interests."
        },
        {
            name: "Resume",
            description: "My downloadable resume.",
        },
    ];

    function sectionSelected(name) {
        console.log(`${name} clicked`)
      }

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="guitar"> </span> Leah Fusari 🎸
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About Me</a>
                    </li>
                    
                    {sections.map((sections) => (
                        <li className="mx-1" key={sections.name}>
                            <span onClick={() => sectionSelected(sections.name)} >
                            {sections.name}</span>
                        </li>
                    ))}

                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;