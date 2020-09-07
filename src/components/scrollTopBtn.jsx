import React, { useEffect, useState } from "react";
import arrow from "../svg/arrow-up.svg";
import '../sass/topBtn.scss';
import { Link } from "react-scroll";

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



  return (
    <Link
      id="topBtn"
      to={"home"}
      smooth={true}
      duration={700}
      className={btnClass}
    >
      <img alt="arrow" src={arrow}></img>
    </Link>
  );

}

export default ScrollTopBtn;
