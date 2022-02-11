import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import View from './components/View';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <View></View>
        <About></About>
      </main>
    </div>
  );
}

export default App;
