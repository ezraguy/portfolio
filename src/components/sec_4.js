
import React, { Component } from 'react';
import '../css/sections.css';
import '../css/inputValidation.css';
import { ReactComponent as CheckSvg } from '../svg/checkSvg.svg';


class Sec_4 extends Component {

    state = {
        isFormValid: false,
        isNameValid: false,
        isEmailValid: false,
        isMessageValid: false,
        data: { name: '', email: '', message: '' },
        errors: []
    }

    handleChange = async (e) => {
        const input = e.currentTarget.name;
        const inputValue = e.currentTarget.value;
        let { data, isFormValid, isNameValid, isEmailValid, isMessageValid } = this.state;
        data[input] = inputValue;


        if (data['name'] === "" || data['name'] === null || data['name'].length <= 1)
            isNameValid = false;
        else {
            isNameValid = true;
        }
        if (data['email'] === "" || data['email'] === null || !/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(data['email'])) isEmailValid = false;
        else isEmailValid = true;

        if (data['message'].length <= 1) isMessageValid = false;
        else isMessageValid = true


        if (isEmailValid && isNameValid && isMessageValid) {
            isFormValid = true;

        } else isFormValid = false;


        await this.setState({ data, isFormValid, isEmailValid, isMessageValid, isNameValid })


    }

    handleSubmit = (e) => {
        const { isFormValid } = this.state
        if (!isFormValid)
            e.preventDefault();



    }


    render() {
        const { data, isMessageValid, isEmailValid, isNameValid, isFormValid } = this.state
        return (
            <div id="contactMe" className="container-fluid">
                {/* A little help for the Netlify bots if you're not using a SSG*/}
                <h3>Let's Chat </h3>
                <div data-aos="fade-left" className="underLineLight" >&nbsp;</div>
                <div className="container" >
                    <form name="contact" method="post" className="was-validated" >
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="form-group">
                            <input value={data.name} onChange={this.handleChange} required placeholder="Name" name="name" id="name" type="text" />
                            {isNameValid && <CheckSvg className="checkSvg" />}

                        </div>
                        <div className="form-group">
                            <input value={data.email} onChange={this.handleChange} required type="email" placeholder="Email" name="email" id="email" />
                            {isEmailValid && <CheckSvg className="checkSvg" />}

                        </div>
                        <div className="form-group">
                            <textarea value={data.message} onChange={this.handleChange} required name="message" className="pl-2" id="message" placeholder="Write your message here..." style={{ height: '200px', resize: 'none' }} ></textarea>
                            {isMessageValid && <CheckSvg className="checkSvg" />}

                        </div>

                        <button onClick={this.handleSubmit} type="submit" disabled={!isFormValid} className="submitButton btn">
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        );
    }
}


export default Sec_4;
