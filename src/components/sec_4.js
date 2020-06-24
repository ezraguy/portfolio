
import React from 'react';
import '../css/sections.css';


function Sec_4() {

    return (



        <div id="contact" className="container-fluid">
            {/* A little help for the Netlify bots if you're not using a SSG*/}


            <h3>Let's Chat </h3>
            <div data-aos="fade-left" className="underLineLight" >&nbsp;</div>
            <div className="container" >
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input className="mb-4" required placeholder="Name" name="Name" id="name" type="text" />
                    <input className="mb-4" required type="email" placeholder="Email" name="email" id="email" />
                    <textarea required name="message" id="message" placeholder="Write your message here..." style={{ height: '200px', resize: 'none' }} ></textarea>
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
