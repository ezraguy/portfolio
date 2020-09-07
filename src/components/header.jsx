import React, { useRef } from "react";
import "../sass/header.scss";
import { ReactComponent as GitSvg } from "../svg/gitSvg.svg";
import { ReactComponent as LinkedInSvg } from "../svg/linkedIn.svg";
import $ from "jquery";

function Header() {
  const sideNav = useRef();
  const sideNavToggle = useRef();

  const openNav = () => {
    sideNav.current.style.width = "250px";
  };
  const closeNav = () => {
    sideNav.current.style.width = "0px";
  };

  const scrollToDiv = (e) => {
    let div = `#${e.target.value}`;
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(div).offset().top,
      }, 0
    );
    closeNav();
  };

  return (
    <nav id="header" className="navbar navbar-expand-lg navbar-light header">
      <button
        id="navTogglerBtn"
        ref={sideNavToggle}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        onClick={() => openNav()}
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <button className="nav-link" value="home" onClick={scrollToDiv}>
              HOME
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" value="about" onClick={scrollToDiv}>
              ABOUT
            </button>
          </li>

          <li className="nav-item">
            <button className="nav-link" value="skills" onClick={scrollToDiv}>
              SKILLS
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              value="contactMe"
              onClick={scrollToDiv}
            >
              CONTACT
            </button>
          </li>
        </ul>
      </div>

      {/* Side nav */}
      <div id="mySidenav" ref={sideNav} className="sidenav">
        <button className="closeBtn" onClick={closeNav}>
          &times;
        </button>
        <button className="nav-item" value="home" onClick={scrollToDiv}>
          HOME
        </button>
        <button className="nav-item" value="about" onClick={scrollToDiv}>
          ABOUT
        </button>
        <button className="nav-item" value="skills" onClick={scrollToDiv}>
          SKILLS
        </button>
        <button className="nav-item" value="contactMe" onClick={scrollToDiv}>
          CONTACT
        </button>

        <div className="sideIconsInSideNav">
          <a href="https://github.com/ezraguy" rel="noopener noreferrer">
            <GitSvg data-aos="fade-left" />
          </a>
          <a
            href="https://www.linkedin.com/in/guyezra"
            rel="noopener noreferrer"
          >
            <LinkedInSvg data-aos="fade-right" />
          </a>
        </div>
      </div>
      <span className="logo">GUYEZRA</span>
    </nav>
  );
}

export default Header;
