import React from 'react';
import About from './About';
import Featured from './Featured';
import Hero from './Hero';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <About/>
    </div>
  );
};

export default Home;