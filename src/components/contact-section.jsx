import React, { Component } from "react";
import { ReactComponent as CheckSvg } from "../svg/checkSvg.svg";

class ContactSction extends Component {
  state = {
    isFormValid: false,
    isNameValid: false,
    isEmailValid: false,
    isMessageValid: false,
    data: { name: "", email: "", message: "" },
    errors: [],
  };

  handleChange = (e) => {
    let {
      data,
      isFormValid,
      isNameValid,
      isEmailValid,
      isMessageValid,
    } = this.state;
    const input = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    data[input] = inputValue;

    if (
      data["name"] === "" ||
      data["name"] === null ||
      data["name"].length <= 1
    )
      isNameValid = false;
    else {
      isNameValid = true;
    }
    if (
      data["email"] === "" ||
      data["email"] === null ||
      !/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(data["email"])
    )
      isEmailValid = false;
    else isEmailValid = true;

    if (data["message"].length < 1) isMessageValid = false;
    else isMessageValid = true;

    if (isEmailValid && isNameValid && isMessageValid) {
      isFormValid = true;
    } else isFormValid = false;

    this.setState({
      data,
      isFormValid,
      isEmailValid,
      isMessageValid,
      isNameValid,
    });
  };

  handleSubmit = (e) => {
    if (!this.state.isFormValid) e.preventDefault();
  };

  render() {
    const {
      data,
      isMessageValid,
      isEmailValid,
      isNameValid,
      isFormValid,
    } = this.state;
    return (
      <div id="contactMe" className="container-fluid">
        <h3>LET'S CHAT </h3>
        <div data-aos="fade-left" className="underLineLight"></div>
        <div className=" container">
          <form
            name="contact"
            onSubmit={this.handleSubmit}
            method="post"
            className="mx-auto"
          >
            <input type="hidden" name="form-name" value="contact" />

            <input
              value={data.name}
              className="pl-2"
              onChange={this.handleChange}
              required
              placeholder="Name"
              name="name"
              id="name"
              type="text"
            />
            {isNameValid && <CheckSvg className="checkSvg" />}

            <input
              value={data.email}
              className="pl-2"
              onChange={this.handleChange}
              required
              placeholder="Email"
              name="email"
              id="email"
            />
            {isEmailValid && <CheckSvg className="checkSvg" />}

            <textarea
              value={data.message}
              onChange={this.handleChange}
              data-gramm_editor="false"
              spellCheck="false"
              required
              name="message"
              className="pl-2"
              id="message"
              placeholder="Write your message here..."
              style={{ height: "200px", resize: "none" }}
            ></textarea>
            {isMessageValid && <CheckSvg className="checkSvg" />}

            <button
              onClick={this.handleSubmit}
              disabled={!isFormValid}
              className="submitButton btn"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactSction;
