import React from 'react';
import '../css/sections.css';
import '../css/topBtn.css';
import ScrollTopBtn from './scrollTopBtn'
import { ReactComponent as GitSvg } from '../svg/gitSvg.svg';
import { ReactComponent as LinkedInSvg } from '../svg/linkedIn.svg';




function sec_1() {


    return (
        <div id="home" className="row container-fluid">
            <div className="leftDiv   col-sm-6 container " >
                <div className="content">
                    <div data-aos="fade-right" data-aos-delay="100" className="labelAboveTitle"> Hey, i'm Guy Ezra</div>
                    <div data-aos="fade-right" data-aos-delay="200" className="firstMainHeader">Front End Developer</div>
                    <div data-aos="fade-right" data-aos-delay="300" className="underTitleTxt container ">
                        <p >
                            My biggest passion is to make a website come to life.
                        </p>
                    </div>
                    <div data-aos="fade-right" data-aos-delay="400"  >
                        <a href="#about" className="aboutMeBtn btn ">ABOUT ME</a>
                        <a href="#contact" className="letsTalk btn ">LET'S CHAT</a>
                    </div>
                </div >
                <div className="sideIcons" >
                    <a href="https://github.com/ezraguy" target="_blank" rel="noopener noreferrer" ><GitSvg data-aos="fade-left"
                    /></a>
                    <a href="https://www.linkedin.com/in/guyezra" target="_blank" rel="noopener noreferrer"><LinkedInSvg data-aos="fade-right" /></a>



                </div>
                <ScrollTopBtn />
            </div>
            <div className="rightDiv container  col-sm-6">
            </div>

        </div>
    );
}



export default sec_1;
