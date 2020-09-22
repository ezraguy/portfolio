import React, { useState } from "react";
import "../sass/projectCard.scss";
import { ReactComponent as GitSvg } from "../svg/gitSvg.svg";
import { ReactComponent as EyeSvg } from "../svg/eye.svg";
import urlShorten from "../images/url-api.png";
import RockPaperScissors from "../images/rock-paper-scissors.png";
import guysPizza from "../images/guys-pizza.png";
import saarTheBarber from "../images/saar-the-barber.png";
const ProjectCard = () => {

  const [projects] = useState([
    {
      id: 1,
      name: "Shorten URL Api",
      animationDelay: "100",
      link: "https://github.com/ezraguy/URL-shortening-API-landing-page",
      website: "https://url-shortening-api-lp-ge.netlify.app/",
      img: urlShorten,
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
      name: "GUY'S PIZZA",
      animationDelay: "300",
      link: "https://github.com/ezraguy/guys-pizza",
      website: "https://confident-beaver-d51f12.netlify.app/",
      img: guysPizza,
    },
    {
      id: 4,
      name: "SAAR THE BARBER",
      animationDelay: "400",
      link: "https://github.com/ezraguy/saar-the-barber",
      website: "https://www.saarthebarber.com/",
      img: saarTheBarber,
    },
  ])


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
                <p className="align-bottom"> {project.name}</p>
                <a href={project.link} rel="noopener noreferrer">
                  <GitSvg data-aos="fade-left" />
                </a>
                <a href={project.website} rel="noopener noreferrer">
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


export default ProjectCard;
