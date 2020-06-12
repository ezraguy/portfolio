import React from 'react';
import '../css/sections.css';
import '../css/topBtn.css';
import ScrollTopBtn from './scrollTopBtn'




function sec_1() {


    return (
        <div id="home" className="row container-fluid">
            <div className="leftDiv   col-sm-6 container " >
                <div className="content">
                    <div data-aos="fade-right" className="labelAboveTitle"> Hey, i'm Guy Ezra</div>
                    <div data-aos="fade-right" className="firstMainHeader">Front End Developer</div>
                    <div data-aos="fade-right" className="underTitleTxt container ">
                        <p >
                            My biggest passion is to make a website come to life.
                        </p>
                    </div>
                    <div data-aos="fade-right"  >
                        <a href="#about" className="aboutMeBtn btn ">ABOUT ME</a>
                        <a href="#contact" className="letsTalk btn ">LET'S CHAT</a>
                    </div>
                </div>
            </div >
            <ScrollTopBtn />
            <div className="rightDiv container  col-sm-6">
            </div>
        </div >
    );
}



export default sec_1;
