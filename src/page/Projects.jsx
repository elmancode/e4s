// import React from "react";
import React, { useState, useEffect } from "react";
import "../style/page/projects.scss";
import MICS from "../image/MICS.jpg";
import Endline from "../image/endline-data.jpg";
import { Link } from "react-router-dom";
import Project from "../image/ourprojects.jpg";
// import { useEffect } from 'react';


const Projects = () => {

  useEffect(() =>{
    window.scroll(0, 0);
  }, []);

  return (
    <div className="projects">
      <div className="cover">
        <div className="overlay"></div>

        <div className="content">
          <div className="container">
            <h2 data-aos="fade-right">Our Projects</h2>
          </div>
        </div>
      </div>

      <div className="work_text">
        <div className="container">
          <div className="content">
            <h3>Awesome Work</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              error adipisci accusamus ut optio aperiam? Sit beatae maiores
              molestiae laudantium.
            </p>
          </div>
        </div>
      </div>

      <div className="work_row">

        <Link to="/MICS">
        <div className="image">
          <div className="overlay"></div>
          <img src={MICS} alt="" />
          <div className="text">
            <h3>MICS</h3>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        </Link>
        <div className="image">
        <div className="overlay"></div>
          <img src={Endline} alt="" />
          <div className="text">
            <h3>Endline-Data</h3>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        <div className="image">
        <div className="overlay"></div>
          <img src={MICS} alt="" />
          <div className="text">
            <h3>Baseline-Data</h3>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        <div className="image">
        <div className="overlay"></div>
          <img src={MICS} alt="" />
          <div className="text">
            <h3>Endline-Data</h3>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
