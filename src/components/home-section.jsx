import React from "react";
import "../sass/sections.scss";
import "../sass/topBtn.scss";
import ScrollTopBtn from "./scrollTopBtn";
import { ReactComponent as GitSvg } from "../svg/gitSvg.svg";
import { ReactComponent as LinkedInSvg } from "../svg/linkedIn.svg";
import $ from "jquery";

function homeSection() {
  const scrollToDiv = (e) => {
    let div = `#${e.target.value}`;
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(div).offset().top,
      },
      "slow"
    );
  };
  return (
    <div id="home" className="row container-fluid">
      <div className="leftDiv col-lg-6 col-md-6 col-sm-6 col-xs-12 container ">
        <div className="content">
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="labelAboveTitle"
          >
            {" "}
            Hey, I'm Guy Ezra
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="firstMainHeader"
          >
            Front End Developer
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="underTitleTxt container-fluid "
          >
            <p>My biggest passion is to make a website come to life.</p>
          </div>
          <div data-aos="fade-right" data-aos-delay="400">
            <button
              onClick={scrollToDiv}
              value="about"
              className="aboutMeBtn"
            >
              ABOUT ME
            </button>
            <button
              onClick={scrollToDiv}
              value="contactMe"
              className="letsTalk"
            >
              LET'S CHAT
            </button>
          </div>
        </div>
        <div className="sideIcons">
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
        <ScrollTopBtn />
      </div>
      <div className="rightDiv container col-lg-6 col-md-6 col-sm-6 col-xs-12"></div>
    </div>
  );
}

export default homeSection;
