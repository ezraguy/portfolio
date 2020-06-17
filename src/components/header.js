import React, { Component } from 'react';
import '../css/header.css';
import { ReactComponent as GitSvg } from '../svg/gitSvg.svg';
import { ReactComponent as LinkedInSvg } from '../svg/linkedIn.svg';




class header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById('root').style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0px";

    }
    render() {
        return (
            <nav id="header" className="navbar navbar-expand-lg navbar-light header">
                <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={this.openNav} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">

                        <li className="nav-item ">
                            <a className="nav-link" href="#home">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">ABOUT</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#skills">SKILLS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">CONTACT</a>
                        </li>

                    </ul>
                </div>

                {/* Side nav */}
                <div id="mySidenav" className="sidenav">
                    <button className="closeBtn" onClick={this.closeNav}>&times;</button>
                    <a href="#home" className="nav-item" onClick={this.closeNav}>HOME</a>
                    <a href="#about" className="nav-item" onClick={this.closeNav}>ABOUT</a>
                    <a href="#skills" className="nav-item" onClick={this.closeNav}>SKILLS</a>
                    <a href="#contact" className="nav-item" onClick={this.closeNav}>CONTACT</a>

                    <div className="sideIconsInSideNav" >
                        <a href="https://github.com/ezraguy" target="_blank" rel="noopener noreferrer" ><GitSvg data-aos="fade-left"
                        /></a>
                        <a href="https://www.linkedin.com/in/guyezra" target="_blank" rel="noopener noreferrer"><LinkedInSvg data-aos="fade-right" /></a>
                    </div>

                </div>
                <span className="logo" >GUYEZRA</span>
            </nav>);
    }
}

export default header;






