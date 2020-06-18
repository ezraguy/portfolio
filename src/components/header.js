import React, { useRef, useEffect } from 'react';
import '../css/header.css';
import { ReactComponent as GitSvg } from '../svg/gitSvg.svg';
import { ReactComponent as LinkedInSvg } from '../svg/linkedIn.svg';


function Header() {

    const sideNav = useRef();
    const sideNavToggle = useRef();
    let prev = window.scrollY;;

    useEffect(() => {
        window.addEventListener('scroll', e => handleNavigation(e));

    })

    const openNav = () => {
        sideNav.current.style.width = "250px";
    }
    const closeNav = () => {
        sideNav.current.style.width = "0px";
    }
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (prev > window.scrollY) {
            sideNavToggle.current.style.opacity = '1';
        } else if (prev < window.scrollY) {
            sideNavToggle.current.style.opacity = '0';

        }
        prev = window.scrollY;
    }






    return (
        <nav id="header" className="navbar navbar-expand-lg navbar-light header">
            <button id="navTogglerBtn" ref={sideNavToggle} className="navbar-toggler" type="button" data-toggle="collapse" onClick={() => openNav()} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
            <div id="mySidenav" ref={sideNav} className="sidenav">
                <button className="closeBtn" onClick={() => closeNav()}>&times;</button>
                <a href="#home" className="nav-item" onClick={() => closeNav()}>HOME</a>
                <a href="#about" className="nav-item" onClick={() => closeNav()}>ABOUT</a>
                <a href="#skills" className="nav-item" onClick={() => closeNav()}>SKILLS</a>
                <a href="#contact" className="nav-item" onClick={() => closeNav()}>CONTACT</a>

                <div className="sideIconsInSideNav" >
                    <a href="https://github.com/ezraguy" target="_blank" rel="noopener noreferrer" ><GitSvg data-aos="fade-left"
                    /></a>
                    <a href="https://www.linkedin.com/in/guyezra" target="_blank" rel="noopener noreferrer"><LinkedInSvg data-aos="fade-right" /></a>
                </div>

            </div>
            <span className="logo" >GUYEZRA</span>
        </nav>
    );
}

export default Header;











