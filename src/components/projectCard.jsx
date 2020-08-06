import React, { Component } from "react";
import "../sass/projectCard.scss";
import { ReactComponent as GitSvg } from "../svg/gitSvg.svg";
import { ReactComponent as EyeSvg } from "../svg/eye.svg";
import cvLpPreview from "../images/portfolio-preview.png";
import RNMPreview from "../images/rick-and-morty.png";
import guysPizza from "../images/guys-pizza.png";
import saarTheBarber from "../images/saar-the-barber.png";
class projectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          name: "PORTFOLIO WEBSITE",
          animationDelay: "100",
          link: "https://github.com/ezraguy/portfolio",
          website: "https://www.guyezra.com/",
          img: cvLpPreview,
        },

        {
          id: 2,
          name: "RICK AND MORTY CHARACTERS ",
          animationDelay: "300",
          link: "https://github.com/ezraguy/rick-and-morty-proj",
          website: "https://keen-kowalevski-ce5c6c.netlify.app",
          img: RNMPreview,
        },
        {
          id: 3,
          name: "GUY'S PIZZA",
          animationDelay: "400",
          link: "https://github.com/ezraguy/guys-pizza",
          website: "https://confident-beaver-d51f12.netlify.app/",
          img: guysPizza,
        },
        {
          id: 4,
          name: "SAAR THE BARBER",
          animationDelay: "500",
          link: "https://github.com/ezraguy/saar-the-barber",
          website: "https://nervous-meninsky-d39d48.netlify.app/",
          img: saarTheBarber,
        },
      ],
    };
  }
  render() {
    let { projects } = this.state;
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          {projects.map((project) => {
            return (
              <div
                data-aos="fade-down"
                data-aos-delay={project.animationDelay}
                key={project.id}
                className="col-xl-4 col-lg-5 col-md-5  col-sm-10 col-10  projectCard m-1 "
              >
                <img src={project.img} alt="project preview" />
                <div className="overlay">
                  <p className="align-bottom"> {project.name}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitSvg data-aos="fade-left" />
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <EyeSvg data-aos="fade-left" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default projectCard;
