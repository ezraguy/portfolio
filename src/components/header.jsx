import React, { useRef, useEffect, useState } from "react";
import "../sass/header.scss";
import { ReactComponent as GitSvg } from "../svg/gitSvg.svg";
import { ReactComponent as LinkedInSvg } from "../svg/linkedIn.svg";
import { Link } from 'react-scroll';



const Header = () => {
  const sideNav = useRef();
  const sideNavToggle = useRef();
  const [headerClass, setHeaderClass] = useState('navbar navbar-expand-lg navbar-dark header')
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 20)
        setHeaderClass('navbar navbar-expand-lg navbar-dark header fixed-header  ');
      else
        setHeaderClass('navbar navbar-expand-lg navbar-dark header ');

    }, [])
  })
  const openNav = () => {
    sideNav.current.style.width = "250px";
  };
  const closeNav = () => {
    sideNav.current.style.width = "0px";
  };

  const scrollToDiv = (e) => {
    closeNav();
  };

  return (
    <nav id="header" className={headerClass}>
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
            <Link smooth={false}
              duration={700} className="nav-link" to={"home"} onClick={scrollToDiv}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth={false}
              duration={700} className="nav-link" to={"about"} offset={-60} onClick={scrollToDiv}>
              ABOUT
            </Link>
          </li>

          <li className="nav-item">
            <Link smooth={false}
              duration={700} className="nav-link" to={"skills"} offset={-60} onClick={scrollToDiv}>
              SKILLS
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth={false}
              offset={-60}
              duration={700}
              to={"contactMe"}
              className="nav-link"
              onClick={scrollToDiv}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Side nav */}
      <div id="mySidenav" ref={sideNav} className="sidenav">
        <button className="closeBtn" onClick={closeNav}>
          &times;
        </button>
        <Link smooth={true}
          duration={700} className="nav-item" to={"home"} offset={-60} onClick={scrollToDiv}>
          HOME
        </Link>
        <Link smooth={true}
          duration={700} className="nav-item" to={"about"} offset={-60} onClick={scrollToDiv}>
          ABOUT
        </Link>
        <Link smooth={true}
          duration={700} className="nav-item" to={"skills"} offset={-60} onClick={scrollToDiv}>
          SKILLS
        </Link>
        <Link smooth={true}
          duration={700} className="nav-item" to={"contactMe"} offset={-60} onClick={scrollToDiv}>
          CONTACT
        </Link>

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
