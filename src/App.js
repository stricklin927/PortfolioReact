import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;