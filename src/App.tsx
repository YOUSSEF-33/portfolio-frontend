import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Present from './components/Present';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Element name="about"><Present /></Element>
        <Element name="about"><About /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;