import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Partners from './components/Partners/Partners';
import Doctor from './components/Doctor/Doctor';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Home />
        <Partners />
        <Doctor />
        <Services />
        <Reviews />
        <Contact />
        <Footer />
      </Router>
    </div>
  )
}

export default App
