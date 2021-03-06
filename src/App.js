import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Header from './components/header';
import { Home } from './components/home';
import { Contact } from './components/contact';
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" exact component={ Home }/>
          <Route path="/contact" exact component={ Contact }/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;