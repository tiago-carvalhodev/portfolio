import React from 'react';
import "./portfolio.css"
import lka from "../../assets/lka.png"
import icon from "../../assets/portfolio.png"

const Portfolio = () => {
  return (
    <div data-wrapP>
      <h1> Developed Projects </h1>
      <div data-gridP>
        <div data-project>
          <h3> Portfolio </h3>
          <img src={icon} width="300" height="150" alt="Screen from the project" />
          <p> Project developed in the personal scope developed in React. </p>
          <a data-btnS> Check it out </a>
        </div>
        <div data-project>
          <h3> Le Koala Autrement </h3>
          <img src={lka} width="300" height="150" alt="Screen from the project" />
          <p> Project developed in a professional scope for Koalità company developed in Jamstack using GatsbyJS, a React framework for the frontend and Sanity.io as CMS. </p>
          <a href="https://lekoalaautrement.corsica" target="_blank" data-btnS> Check it out </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
