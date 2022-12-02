import React from 'react';
import './styles.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';

export default function App() {
  return (
    <>
      <About />
      <Experience />
      <Contact />
    </>
  );
}
