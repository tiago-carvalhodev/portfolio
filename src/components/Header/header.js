import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import Home from '../Home/home';
import Portfolio from '../Portfolio/portfolio';
import Contact from '../Contact/contact';
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
    <nav data-nav >
      <div data-navMob onClick={handleClick}>
        {click ? (
          <div data-close>
            <div />
            <div />
          </div>
        ) : (
          <div data-open>
            <div />
            <div />
            <div />
          </div>
        )}
      </div>
      <h1> Tiago Carvalho </h1>
      <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option" onClick={closeMobileMenu}>
          <Link to="/">Home</Link>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <Link to="/work">Work</Link>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    { /* Route components are rendered if the path prop matches the current URL */}
    <Routes>
      <Route path="/" element={<Home/>} > </Route>
      <Route path="/work" element={<Portfolio/>}> </Route>
      <Route path="/contact" element={<Contact/>}> </Route>
    </Routes>
  </div>
  );
};

  export default Header;
