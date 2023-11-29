import React, { useState } from "react";

function Contact() {
  return (
    <section id="contact">
      <p>Get in Touch</p>
      <h1>Contact Me</h1>
      <div>
        <div>
          <form>
            <div>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name"></input>
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email"></input>
              </div>
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea type="text" name="message" rows="5"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
