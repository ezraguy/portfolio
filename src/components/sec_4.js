
import React from 'react';
import '../css/sections.css';


function Sec_4() {

    return (
        <div id="contact" className="container-fluid">
            <h3>Let's Chat </h3>
            <div data-aos="fade-left" className="underLineLight" >&nbsp;</div>
            <div className="container">
                <form className="form-group">
                    <div className="mb-4">
                        <input placeholder="Name" name="name" type="text" />
                    </div>
                    <div className="mb-4">
                        <input placeholder="Email" name="email" type="text" />
                    </div>
                    <textarea name="message" placeholder="Write your message here..." style={{ height: '200px', resize: 'none' }} ></textarea>

                    <div className="button">
                        <span>Submit</span>
                        <svg>
                            <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                            <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        </svg>
                    </div>

                </form>
            </div>
        </div>
    );
}


export default Sec_4;
