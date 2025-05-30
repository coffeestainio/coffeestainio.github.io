import React from 'react';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </>
  );
};

export default Home;