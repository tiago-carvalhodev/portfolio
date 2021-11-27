import React, { Component } from 'react';
import "./home.css";



class Home extends Component {
  render() {
    return (
      <div data-wrapH>
        <div data-anim>
          <div data-t> <h1> T </h1> </div>
          <div data-c> <h1> C </h1> </div>
        </div>
          <div data-f>
            <h1> Hello there, welcome to my Portfolio </h1>
            <div data-f2 >
              <p> Tiago Carvalho 21 years old , Portuguese currently living in Ajaccio, France,
    Studying for a diplome Bachelor's degree in Conception of web and mobile applications.
    Currently Junior Dev at koalità.
    Tiago Carvalho 21 years old , Portuguese currently living in Ajaccio, France,
    Studying for a diplome Bachelor's degree in Conception of web and mobile applications.
    Currently junior Web developer at koalità. </p>
            </div>
            <a href="/work" data-btn> KNOW MORE </a>
          </div>
        </div>
    );
  }
}

export default Home;
