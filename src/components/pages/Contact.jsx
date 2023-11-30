import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

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
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          ></textarea>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
