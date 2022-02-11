import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import View from './components/View';

function App() {
  const [categories] = useState([
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
    }
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <View currentCategory={currentCategory}></View>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
