import React from 'react';
import '../css/sections.css';
import ProjectCard from './projectCard';


function sec_3() {

    return (
        <div id="skills" className="container-fluid ">

            <h3>SOME OF MY PROJECTS</h3>
            <div data-aos="fade-left" className="underLineDark" >&nbsp;</div>

            <div className="container-fluid projects">
                <ProjectCard />
            </div>


        </div>

    );
}



export default sec_3;
