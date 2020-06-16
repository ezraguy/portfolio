import React, { Component } from 'react';
import '../css/header.css';



class header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (<nav id="header" className="navbar navbar-expand-lg navbar-dark header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
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
            <span className="logo" >GUYEZRA</span>
        </nav>);
    }
}

export default header;






