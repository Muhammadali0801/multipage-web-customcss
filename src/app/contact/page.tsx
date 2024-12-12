import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">Thank You for Reaching Out!</h1>
      <p className="contact-paragraph">
        We value your feedback and inquiries. Please fill out the form below, and we'll get back to you as soon as possible.
      </p>
      <form className="contact-form">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" id="name" name="name" className="form-input" placeholder="Enter your name" />

        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" id="email" name="email" className="form-input" placeholder="Enter your email" />

        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea id="message" name="message" className="form-textarea" placeholder="Your message"></textarea>

        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
