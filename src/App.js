import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import Home from './components/Home/home';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
      <nav data-nav>
        <h1> Tiago Carvalho </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */}
      <Routes>
        <Route path="/" element={<Home/>} > </Route>
        <Route path="/portfolio" element={<Portfolio/>}> </Route>
        <Route path="/contact" element={<Contact/>}> </Route>
      </Routes>
    </div>
    );
  }
}

export default App;
