import React, { useState } from "react";
import { ReactComponent as GitSvg } from "../svg/gitSvg.svg";
import { ReactComponent as EyeSvg } from "../svg/eye.svg";
import urlShorten from "../images/url-api.webp";
import RockPaperScissors from "../images/rock-paper-scissors.webp";
import guysPizza from "../images/guys-pizza.webp";
import archstudio from "../images/arch-studio.webp";
import saarTheBarber from "../images/saar-the-barber.webp";
import officelite from "../images/office-light.webp";
const ProjectCard = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "ARCH STUDIO",
      animationDelay: "100",
      link: "https://github.com/ezraguy/arch-studio",
      website: "https://arch-studio-ge.netlify.app/",
      img: archstudio,
    },

    {
      id: 2,
      name: "ROCK PAPER SCISSORS LIZARD SPOCK ",
      animationDelay: "200",
      link: "https://github.com/ezraguy/Rock-Paper-Scissors-game",
      website: "https://rock-paper-scissors-lizard-spock-ge.netlify.app/",
      img: RockPaperScissors,
    },

    {
      id: 3,
      name: "Saar The Barber",
      animationDelay: "300",
      link: "https://github.com/ezraguy/saar-the-barber",
      website: "https://saarbarber.netlify.app/",
      img: saarTheBarber,
    },
    {
      id: 4,
      name: "Shortly",
      animationDelay: "400",
      link: "https://github.com/ezraguy/URL-shortening-API-landing-page",
      website: "https://url-shortening-api-lp-ge.netlify.app/",
      img: urlShorten,
    },

    {
      id: 5,
      name: "Officelite",
      animationDelay: "500",
      link: "https://github.com/ezraguy/office-light-challenge",
      website: "https://office-light-ge.netlify.app/",
      img: officelite,
    },
    {
      id: 6,
      name: "GUY'S PIZZA",
      animationDelay: "600",
      link: "https://github.com/ezraguy/guys-pizza",
      website: "https://confident-beaver-d51f12.netlify.app/",
      img: guysPizza,
    },
  ]);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {projects.map((project) => {
          return (
            <div
              data-aos="fade-down"
              data-aos-delay={project.animationDelay}
              key={project.id}
              className="col-xl-4 col-lg-5 col-md-5  col-sm-10 col-xs-12 col-12  projectCard m-1 "
            >
              <img src={project.img} alt="project preview" />
              <div className="overlay">
                <p className="align-bottom project-name">{project.name}</p>
                <div className="svg-wrap">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
