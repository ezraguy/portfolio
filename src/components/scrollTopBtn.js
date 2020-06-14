import React, { Component } from 'react';
import $ from 'jquery';



class ScrollTopBtn extends Component {
    constructor() {
        super();

        this.onclick = this.onclick.bind(this);
    }

    render() {

        return (
            <button id="topBtn" onClick={this.onclick} className="topBtn"><img alt="arrow" src={require('../images/arrow-up.svg')}></img></button>
        );
    }

    onclick() {
        $("html, body").animate({ scrollTop: 0 }, 500);

    }
}

export default ScrollTopBtn;