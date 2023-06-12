import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/logo.png";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import "../style/components/header.scss";
import { useState, useEffect } from "react";

const Header = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#1f1f1f") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const [searchShow, setSearchShow] = useState(true);
  const handleClick = (e) => {
    setSearchShow((current) => !current);
  };

  return (
    <header>
      <div
        className="header"
        style={{
          height: navSize,
          backgroundColor: navColor,
          transition: "all 3s",
        }}
      >
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/service"> Service</Link>
            </li>
            <li>
              <Link to="/projects"> Projects</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={handleClick}
          style={{ border: "none", background: "none" }}
        >
          <FiSearch className="search" />
        </button>
      </div>

      <div
        className="search_wrap"
        style={{ visibility: searchShow ? "hidden" : "visible" }}
      >
        <div className="search_self">
          <div className="container">
            <input type="text" placeholder="Axtarış" />
            <FiSearch style={{ fontSize: "20px" }} />
            <button
              onClick={handleClick}
              style={{ border: "none", background: "none" }}
            >
              <GrClose style={{ fontSize: "20px", marginLeft: "20px" }} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
