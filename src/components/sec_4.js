
import React from 'react';
import '../css/sections.css';


function Sec_4() {

    return (



        <div id="contactMe" className="container-fluid">
            {/* A little help for the Netlify bots if you're not using a SSG*/}


            <h3>Let's Chat </h3>
            <div data-aos="fade-left" className="underLineLight" >&nbsp;</div>
            <div className="container" >
                <form name="contact" method="post" >
                    <input type="hidden" name="form-name" value="contact" />
                    <input className="mb-4 pl-2" required placeholder="Name" name="name" id="name" type="text" />
                    <input className="mb-4 pl-2" required type="email" placeholder="Email" name="email" id="email" />
                    <textarea required name="message" className="pl-2" id="message" placeholder="Write your message here..." style={{ height: '200px', resize: 'none' }} ></textarea>
                    <button type="submit" className="submitButton btn">
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
}


export default Sec_4;
