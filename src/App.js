import React from 'react';
import './App.css';
import Body from './COMPONENTS/Body.js';
import Footer from './COMPONENTS/Footer.js';
import Header from './COMPONENTS/Header.js';
import Supervisor from './COMPONENTS/Supervisor.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/supervisor">
          <Header/>
          <Supervisor/>
          <Footer/>
        </Route>
        <Route path="/">
          <Header/>
          <Body/>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
