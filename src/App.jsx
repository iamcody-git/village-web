import React from 'react'
import NavBar from './components/NavBar'
import './App.css';
import Header from './components/Header';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavBar/><br/><br/><br/>
      <Header/><br/><br/><br/>
      <Work/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App;
