import React, { useRef, useEffect } from 'react';
import $ from 'jquery';



function ScrollTopBtn() {

    const scrollUpBtn = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 150) {

                scrollUpBtn.current.style.opacity = 1;
            }
            else
                scrollUpBtn.current.style.opacity = 0;
        });

    })

    const scrollUp = () => {
        $("html, body").animate({ scrollTop: 0 }, 500);

    }

    return (
        <button id="topBtn" ref={scrollUpBtn} onClick={() => scrollUp()} className="topBtn"><img alt="arrow" src={require('../images/arrow-up.svg')}></img></button>
    );



}

export default ScrollTopBtn;