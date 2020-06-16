import React, { Component } from 'react';


class projectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [{
                id: 1,
                name: 'Item title',
                animationDelay: "100"
            },
            {
                id: 2,
                name: 'Item title',
                animationDelay: "200"
            },
            {
                id: 3,
                name: 'Item title',
                animationDelay: "300"
            },
            {
                id: 4,
                name: 'Item title',
                animationDelay: "400"
            },

            ]
        }
    }
    render() {
        let { projects } = this.state;
        return (
            <div className="row justify-content-center">
                {projects.map((project) => {
                    return (
                        <div data-aos="fade-down" data-aos-delay={project.animationDelay} key={project.id} className="col-xl-2 col-md-4 col-sm-8 col-8 card  ">
                            <p className=" align-bottom"> {project.name}</p>
                        </div>
                    )
                })}
            </div>

        );
    }
}

export default projectCard;