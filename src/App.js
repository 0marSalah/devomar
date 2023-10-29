import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ExpEdu from './components/Exp&Edu';
import Projects from './components/Projects';

import './styles/globals.scss';

function App() {
  // const light = [1,2,3,4,5,6,7,8,9,10]
  return (
    <main className="App">
      {/* {light.map((i) => (
        <div key={i} className="light" style={{"--idx": i}}></div>
      ))} */}
      <Header />
      <Home />
      <About />
      <ExpEdu />
      <Projects />
    </main>
  );
}

export default App;
