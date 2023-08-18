// import React from "react";
import React, { useState, useEffect } from "react";
import "../style/page/projects.scss";
import MICS from "../image/MICS.jpg";
import { Link } from "react-router-dom";
import Project from "../image/ourprojects.jpg";

const Projects = () => {
  useEffect(() => {
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
              E4S puts developing sustainable capacity in everything we do, as
              our high-quality work should leave a lasting legacy.
            </p>
          </div>
        </div>
      </div>

      <div className="work_row">
        <Link to="/MICS">
        <h2>MICS</h2>
        </Link>

        <Link to="/EORE">
        <h2>EORE</h2>
        </Link>

        <Link to="/EU">
        <h2>EU</h2>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
