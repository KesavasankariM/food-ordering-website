import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Populardishes from './components/Populardishes';
import Partners from './components/Partners';
import KeyFeatures from './components/keyFeatures';
import Textimonials from './components/Textimonials';
import Contact from './components/Contact' ;
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Populardishes />
      <Partners />
      <KeyFeatures />
      <Textimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App