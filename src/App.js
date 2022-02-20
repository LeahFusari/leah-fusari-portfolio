import React, { useState } from 'react';
import View from './components/View';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [categories] = useState([
    {
      name: 'About Me',
    },
    {
      name: 'portfolio',
      description: "Website projects that I have built or contributed to.",
    },
    {
      name: 'interests',
      description: "Some of my non-web development interests."
    },
    {
      name: 'resume',
    },
    {
      name: 'contact',
    }

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
        <div>
          <View currentCategory={currentCategory}></View>
        </div>
      <Footer />
    </div>
  );
}


export default App;
