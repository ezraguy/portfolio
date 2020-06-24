
import React from 'react';
import '../css/sections.css';


function Sec_4() {

    return (



        <div id="contact" className="container-fluid">
            {/* A little help for the Netlify bots if you're not using a SSG*/}

            <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
            </form>
            <h3>Let's Chat </h3>
            <div data-aos="fade-left" className="underLineLight" >&nbsp;</div>
            <div className="container" >
                <form name="contact" method="post" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <input className="mb-4" required placeholder="Name" name="Name" type="text" />
                    <input className="mb-4" required type="email" placeholder="Email" name="email" />
                    <textarea required name="message" placeholder="Write your message here..." style={{ height: '200px', resize: 'none' }} ></textarea>
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
