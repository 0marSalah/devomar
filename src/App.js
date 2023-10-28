import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ExpEdu from './components/Exp&Edu';

import './styles/globals.scss';

function App() {
  return (
    <main className="App">
      <Header />
      <Home />
      <About />
      <ExpEdu />
    </main>
  );
}

export default App;
