import React, { Component } from 'react';
import "../css/projectCard.css";
import { ReactComponent as GitSvg } from '../svg/gitSvg.svg';
import { ReactComponent as EyeSvg } from '../svg/eye.svg';
import cvLpPreview from '../images/cv-lp-preview.png'
import RNMPreview from '../images/rick-and-morty.png'
import comingSoon from '../images/coming-soon.png'
class projectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [{
                id: 1,
                name: 'PORTFLIO WEBSITE',
                animationDelay: "100",
                link: "https://github.com/ezraguy/cv-lp",
                website: 'https://www.guyezra.com/',
                img: cvLpPreview
            },

            {
                id: 2,
                name: 'RICK AND MORTY CHARACTERS ',
                animationDelay: "300",
                link: "https://github.com/ezraguy/rick-and-morty-proj",
                website: 'https://keen-kowalevski-ce5c6c.netlify.app',
                img: RNMPreview
            },
            {
                id: 3,
                name: 'VIRTUAL BUSSNIES CARDS PROJECT',
                animationDelay: "400",
                link: "https://github.com/ezraguy/business-cards-project",
                website: '',
                img: comingSoon
            },

            ]
        }
    }
    render() {
        let { projects } = this.state;
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {projects.map((project) => {
                        return (
                            <div data-aos="fade-down" data-aos-delay={project.animationDelay} key={project.id} className="col-xl-3 col-lg-3 col-md-7  col-sm-10 col-10  projectCard m-2  ">
                                <img src={project.img} alt="project preview" />
                                <div className="overlay">
                                    <p className="align-bottom"> {project.name}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" ><GitSvg data-aos="fade-left"
                                    /></a>
                                    <a href={project.website} target="_blank" rel="noopener noreferrer" ><EyeSvg data-aos="fade-left"
                                    /></a>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        );
    }
}

export default projectCard;