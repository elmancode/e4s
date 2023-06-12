import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Person from "../image/rufat.jpg"
import "../style/page/about.scss";
import Elmir from "../image/elmir.jpg"
import Turan from "../image/turan.jpg"

const about = () => {
 
  return (
    <div className="about">
      <div className="cover" >
        <div className="overlay"></div>

        <div className="content">
          <div className="container">
        
            <h2 data-aos="fade-right" >
              We are a creative agency that focus on one-to-one customer service
              with robust ideas.
            </h2>
          </div>
        </div>
      </div>

      <div className="our_mission">
        <div className="container">
          <div className="content">
            <h3>Our Mission</h3>

            <div className="text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo alias quas autem. Fugiat et, nobis alias ex debitis
                quis fuga quas voluptatibus aliquid minus, saepe adipisci
                necessitatibus dignissimos repellat eos.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                dignissimos deleniti distinctio esse doloribus dolorum
                exercitationem reprehenderit qui corporis, laudantium autem
                veritatis, fugit eligendi adipisci molestias! Magnam quis in
                facilis.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                ipsum inventore maiores illum ullam laudantium, nisi veniam
                porro debitis eaque.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="our_vision">
        <div className="container">
          <div className="content">
            <h3>Our Vision</h3>

            <div className="text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo alias quas autem. Fugiat et, nobis alias ex debitis
                quis fuga quas voluptatibus aliquid minus, saepe adipisci
                necessitatibus dignissimos repellat eos.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                dignissimos deleniti distinctio esse doloribus dolorum
                exercitationem reprehenderit qui corporis, laudantium autem
                veritatis, fugit eligendi adipisci molestias! Magnam quis in
                facilis.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                ipsum inventore maiores illum ullam laudantium, nisi veniam
                porro debitis eaque.
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="team_area">
        <div className="team">
          <div className="container">
            <div className="content">
              <h3>Our Creative Team </h3>
              <p>
                Tour function information without cross action media value
                quickly maximize timely deliverables.
              </p>
            </div>

            <div className="team_pic">
              <figure>
                <img src={Elmir} alt="" />
                <figcaption>
                  <h3>Elmir Valehli</h3>
                  <p>Founder & CEO</p>
                </figcaption>
              </figure>
              <figure>
                <img src={Turan} alt="" />
                <figcaption>
                  <h3>Turan Sadiqov </h3>
                  <p>Manager</p>
                </figcaption>
              </figure>
              <figure>
                <img src={Person} alt="" />
                <figcaption>
                  <h3>Rufat Rufat</h3>
                  <p>Project Cordinator</p>
                </figcaption>
              </figure>
              <figure>
                <img src={Person} alt="" />
                <figcaption>
                  <h3>Elman Asgarov</h3>
                  <p>Developer</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
