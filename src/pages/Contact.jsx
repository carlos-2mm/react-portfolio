import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    let tempErrorMessage = "";

    // Validate email
    if (name === "email" && value) {
      const isValid = validateEmail(value);
      if (!isValid) {
        tempErrorMessage = "Your email is invalid.";
      }
    }

    // Validate name and message
    if (!value) {
      tempErrorMessage = `${name} is required.`;
    }

    setErrorMessage(tempErrorMessage);

    if (!tempErrorMessage) {
      setFormState({ ...formState, [name]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section id="contact">
      <p className="subtitle">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-section">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
            className="form-control"
          ></textarea>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button className="btn btn-color-1" type="submit">Send</button>
      </form>
      </div>
    </section>
  );
}

export default Contact;
