import React, { Component } from 'react';
import $ from 'jquery';




class ScrollTopBtn extends Component {
    constructor(props) {
        super(props);
        this.state = { opacity: 0, dis: true }
    }

    componentDidMount() {

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 150) {
                this.setState({ opacity: 1, dis: false })

            }
            else {
                this.setState({ opacity: 0, dis: true })

            }
        });


    }

    scrollUp = () => {
        $("html, body").animate({ scrollTop: 0 }, 500);

    }
    render() {
        return (<button id="topBtn" disabled={this.state.dis} style={{ opacity: this.state.opacity }} onClick={() => this.scrollUp()} className="topBtn"><img alt="arrow" src={require('../images/arrow-up.svg')}></img></button>);
    }
}

export default ScrollTopBtn;