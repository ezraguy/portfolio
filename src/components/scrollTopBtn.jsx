import React, { useEffect, useState } from "react";
import arrow from "../svg/arrow-up.svg";
import '../sass/topBtn.scss';

const ScrollTopBtn = () => {


  const [btnClass, setBtnClass] = useState("topBtn")

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setBtnClass('topBtn-visible');
      } else {
        setBtnClass('topBtn');
      }
    });

  }, [])

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  return (
    <button
      id="topBtn"
      onClick={scrollToTop}
      className={btnClass}
    >
      <img alt="arrow" src={arrow}></img>
    </button>
  );

}

export default ScrollTopBtn;
