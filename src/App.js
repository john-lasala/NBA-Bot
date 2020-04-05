import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./COMPONENTS/Header.js";
import Body from './COMPONENTS/Body.js';
import Footer from './COMPONENTS/Footer.js';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Body/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
