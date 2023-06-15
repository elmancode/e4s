import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../style/page/home.scss";
import File from "../image/file.png";
import Visual from "../image/visual.png";
import Develop from "../image/develop.png";
import About from "../image/aboutus.jpg";
import { TbPlayerPlayFilled } from "react-icons/tb";
import CardProject from "../components/CardProject";
import { projectsData } from "../data";
import Unicef from "../image/unicef.png";
import T4S from "../image/t4s.png";
import WHO from "../image/who.png";
import Duygu from "../image/duygu.png";
import AzStat from "../image/azstat.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(()=> {
    AOS.init ({duration: 3000});

  }, [])
  return (
    <div className="home">
      {/* section 1 */}

      <section className="introduction">
        <div className="overlay"></div>
        <div className="content"  data-aos="fade-right">
          <div className="container">
            <h1>
              The independent research company that is specialized in the
              generation of high-quality evidence.
            </h1>

            <div className="visitWork" >
              <Link to="/projects" target="_blank">
                <span> Visit Our Works </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="service"  >
        <div className="container">
          <div className="content" data-aos="fade-up">
            <span>Service</span>
            <h3>
              With more than 5 years of experience we can deliver the best
              product.
            </h3>
          </div>

          <div className="service-row" >
            <div className="row" data-aos="fade-right">
              <Link to="/service" target="_blank">
                <div className="row-items">
                  <img src={File} alt="" />
                  <h3> Lorem, ipsum dolor. </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, asperiores.
                  </p>
                </div>
              </Link>
            </div>

            <div className="row"data-aos="fade-in">
              <Link to="/service" target="_blank">
                <div className="row-items">
                  <img src={Visual} alt="" />
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, asperiores.
                  </p>
                </div>
              </Link>
            </div>

            <div className="row"data-aos="fade-left">
              <Link to="/service" target="_blank">
                <div className="row-items">
                  <img src={Develop} alt="" />
                  <h3> Lorem, ipsum dolor.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, asperiores.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="about">
        <div className="about">
          <div className="leftside">
            <img src={About} alt="" />
          </div>
          <div className="rightside" >
            <div  data-aos="fade-up">
            <h4 >About us</h4 >
            <span > Peşəkar Profil</span>
            <p >
              “Evidence for Solutions” (E4S) müştərilərimizə problemlərin başa
              düşülməsi, nəticələrin ölçülməsi və qərarların qəbul edilməsinə
              dəstək olacaq yüksək keyfiyyətli məlumatların toplanması və
              təhlili üzrə ixtisaslaşmış müstəqil tədqiqat şirkətidir.
            </p>

            <div className="aboutus">
              <Link to="/about" target="_blank">
                <span> About us </span>
              </Link>
            </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="portfolio_area">
        <div className="portfolio" data-aos="fade-up">
          <div className="container">
            <div className="content">
              <h3>Featured Works</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                error adipisci accusamus ut optio aperiam? Sit beatae maiores
                molestiae laudantium.
              </p>
            </div>

            <div className="projectsData">
              {projectsData.map((item) => (
                <CardProject
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  more={item.more}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className="how_we_work">
        <div className="how_work" >
          <div className="leftside"  >
            <h3 data-aos="fade-right"> How we work </h3>
            <p data-aos="fade-left">
              E4S layihənin başlamasından etibarən hər bir tərəfdaşa uyğun olan
              yanaşmalarımız barədə məlumat verən tərtib, tətbiqetmə və
              qiymətləndirmə mərhələləri də daxil olmaqla, layihə dövrü
              müddətində tərəfdaşların iştirakını maksimum dərəcədə artırır.
            </p>

            <div className="watch">
              <div className="video_watch" data-aos="fade-right">
                <Link to="video_watch">
                  <TbPlayerPlayFilled className="play"  />
                </Link>
              </div>
              <div className="text" data-aos="fade-left">
                <span >Watch video</span>
              </div>
            </div>
          </div>

          <div className="rightside"></div>
        </div>
      </section>

      {/* section 6 */}
      <div className="partners"  data-aos="fade-up">
        <div className="container">
          <div className="content">
            <h3>Our Partners</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto doloribus ipsam nostrum quaerat fugit quas quis!
              Explicabo ab debitis, aliquam sunt magni recusandae iusto saepe
              dolore possimus! Facilis, laborum enim?
            </p>
          </div>

          <div className="partners_logo">
            <div className="unicef">
              <img src={Unicef} alt="" />
            </div>

            <div className="t4s">
              <img src={T4S} alt="" />
            </div>

            <div className="who">
              <img src={WHO} alt="" />
            </div>
            <div className="duygu">
              <img src={Duygu} alt="" />
            </div>
            <div className="azstat">
              <img src={AzStat} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* section 7 */}
      <section className="get_in_touch_area" >
        <div className="get_in_touch">
          <div className="container">
            <div className="content" data-aos="fade-up">
              <h3>Get in Touch</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti labore rem laudantium.
              </p>
            </div>

            <div className="form" >
              <form action="#">
                <div className="row1" data-aos="fade-up">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Email" />
                </div>
                <div className="row2" data-aos="fade-up">
                  <input type="text" placeholder="Subject" />
                  <textarea
                    className="message"
                    cols="30"
                    placeholder="Message"
                    rows="10"
                  ></textarea>
                  <button class="boxed_btn" type="submit" >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
