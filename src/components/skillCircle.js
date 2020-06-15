import React, { Component } from 'react';
import '../css/skillCircle.css'
class skillCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: ['html,css,react']
        }
    }



    render() {
        return (
            <div className="container">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>

                        <div className="number">
                            <h2>87 <span>%</span></h2>
                        </div>

                    </div>
                    <h2 className="text">Progress</h2>
                </div>


            </div>


        );

    }
}

export default skillCircle;