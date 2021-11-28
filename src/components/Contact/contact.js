import React from 'react';
import "./contact.css"
import cv from "../../assets/CVTiagoCarvalho.pdf"
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFilePdf } from 'react-icons/ai';



const Contact = () => {
  return (
    <div data-wrapC>
      <h1> Contact Me :) </h1>
      <div data-content>
      <div data-socials>
        <a href="https://github.com/tiago-carvalhodev" target="_blank"> <AiFillGithub /> GitHub </a>
        <a href="https://www.linkedin.com/in/tiago-carvalhodev/" target="_blank"> <AiFillLinkedin /> Linkedin </a>
        <a href={cv} download file="CVTiagoCarvalho"> <AiFillFilePdf /> Download my cv </a>
      </div>
        <iframe src={cv} width="800px" height="1200px" frameborder="0"/>
      </div>
    </div>
  );
}

export default Contact;
