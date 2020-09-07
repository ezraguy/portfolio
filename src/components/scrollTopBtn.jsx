import React, { useEffect, useState } from "react";
import arrow from "../svg/arrow-up.svg";
import '../sass/topBtn.scss';
import { Link } from "react-scroll";

const ScrollTopBtn = () => {

  const [btnClass, setBtnClass] = useState("topBtn")
  const [isOnMobile, setIsOnMobile] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setBtnClass('topBtn-visible');
      } else {
        setBtnClass('topBtn');
      }
    });

  }, [])
  useEffect(() => {
    if (window.screen.width < 1000)
      setIsOnMobile(true)
  }, [])



  return (
    <Link
      id="topBtn"
      to={"home"}
      smooth={isOnMobile}
      duration={700}
      className={btnClass}
    >
      <img alt="arrow" src={arrow}></img>
    </Link>
  );

}

export default ScrollTopBtn;
