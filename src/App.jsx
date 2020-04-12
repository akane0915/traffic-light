import React from 'react';
import LightApp from './LightApp';

const App = () => {
  return (
    // Accessiblity standards expect a main element on each page
    <main>
      <h3>Click on the traffic light to activate a random light!</h3>
      <LightApp />
    </main>
  )
};

export default App;