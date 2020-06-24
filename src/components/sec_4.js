
import React, { useRef } from 'react';
import '../css/sections.css';


function Sec_4() {
    const nameSpan = useRef();
    const nameInput = useRef();





    return (
        <div id="contact" className="container-fluid">
            <h3>Let's Chat </h3>
            <div data-aos="fade-left" className="underLineLight" >&nbsp;</div>
            <div className="container">
                <form>

                    <div className="mb-4">
                        <input placeholder="Name" name="name" type="text" />
                    </div>
                    <div className="mb-4">
                        <input placeholder="Email" name="email" type="text" />
                    </div>
                    <textarea name="message" placeholder="Write your message here..." style={{ height: '200px', resize: 'none' }} ></textarea>

                    <div class="button">
                        <span>Submit</span>
                        <svg>
                            <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                            <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        </svg>
                    </div>

                </form>
            </div>
        </div>
    );
}


export default Sec_4;