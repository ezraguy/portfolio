
import React from 'react';
import '../css/sections.css';


function Sec_4() {

    return (
        <div id="contact" className="container-fluid">
            <h3>Let's Chat </h3>
            <div data-aos="fade-left" className="underLineLight" >&nbsp;</div>
            <div className="container" >
                <form action="POST" data-netlify="true">
                    <input className="mb-4" required placeholder="Name" name="Name" type="text" />
                    <input className="mb-4" required type="email" placeholder="Email" name="email" />
                    <textarea required name="Message" placeholder="Write your message here..." style={{ height: '200px', resize: 'none' }} ></textarea>
                    <div data-netlify-recaptcha="true" ></div>
                    <button className="submitButton">
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
}


export default Sec_4;
