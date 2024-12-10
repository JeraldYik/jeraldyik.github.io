import './App.scss';

import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Timeline from './components/Timeline';
// import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <About />
      {/* <Projects /> */}
      <Timeline />
      <Footer />
    </div>
  );
};

export default App;
