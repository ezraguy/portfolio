import React from "react";
import "aos/dist/aos.css";
import { ReactComponent as SpeedSvg } from "../svg/speedSvg.svg";
import { ReactComponent as ResponsiveSvg } from "../svg/responsiveSvg.svg";
import { ReactComponent as AliveSvg } from "../svg/aliveSvg.svg";

function aboutSection() {
  return (
    <div id="about" className="container-fluid ">
      <div className="whoMI container">
        <div className="firstHeader container ">WHO IS THIS DUDE? </div>
        <div data-aos="fade-left" className="underLineDark"></div>

        <div data-aos="fade-right" className="textUnderHeader ">
          Hey, I'm a 23 years old front-end developer with a big passion for
          making websites come to life. My main priority is to ensure the users
          have fun on my site while getting the information they need. It only
          takes users around 3 seconds to decide if they want to stay, so in
          that short time window it's my job to make sure they want to stick
          around.
        </div>
      </div>
      <div className="header container">
        <span className="">MY CORE VALUES</span>
        <div data-aos="fade-right" className="underLineDark">

        </div>
      </div>

      <div className="values container-fluid ">
        <div className="row justify-content-around">
          <div className="card col-lg-3 col-md-12  col-sm-12 col-xs-12 ">
            <div className="svgIcon" data-aos="fade-down" data-aos-delay="100">
              <ResponsiveSvg />
            </div>
            <div className="card-body">
              <h3 className="text-bold">RESPONSIVE</h3>
              <p>All components will look good no matter the screen size. </p>
            </div>
          </div>
          <div className="card card col-lg-3  col-sm-12 col-xs-12 ">
            <div className="svgIcon" data-aos="fade-down" data-aos-delay="200">
              <SpeedSvg />
            </div>
            <div className="card-body">
              <h3 className="text-bold">FAST</h3>
              <p className="card-text">
                The user's time is valuable so the website has to be fast and
                with minimal loading time.{" "}
              </p>
            </div>
          </div>
          <div className="card card col-lg-3  col-sm-12 col-xs-12">
            <div className="svgIcon" data-aos="fade-down" data-aos-delay="300">
              <AliveSvg />
            </div>
            <div className="card-body">
              <h3 className="text-bold">ALIVE</h3>
              <p className="card-text">
                A website is a living thing. I make sure it looks like it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutSection;
