import React, { Component } from "react";
import $ from "jquery";
import arrow from "../svg/arrow-up.svg";

class ScrollTopBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { visibility: "hidden", dis: true, opacity: 0 };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        this.setState({ visibility: "visible", opacity: 1, dis: false });
      } else {
        this.setState({ visibility: "hidden", opacity: 0, dis: true });
      }
    });
  }

  scrollUp = () => {
    $("html, body").animate({ scrollTop: 0 }, 500);
  };
  render() {
    const { visibility, opacity, dis } = this.state;
    return (
      <button
        id="topBtn"
        disabled={dis}
        style={{ visibility: visibility, opacity: opacity }}
        onClick={() => this.scrollUp()}
        className="topBtn"
      >
        <img alt="arrow" src={arrow}></img>
      </button>
    );
  }
}

export default ScrollTopBtn;
