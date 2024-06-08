import React from "react";
import "./ContactStyles.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Feel Free To Contact Us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3928.8742402169214!2d76.30548102422999!3d10.027235272567117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slulu%20mall%20kochi!5e0!3m2!1sen!2sin!4v1686209945991!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="contact-sec">
        <div>
          <form
            className="contact-form"
            action="https://formspree.io/f/mqkovnpw"
            method="POST"
          >
            <input
              className="inputdetails"
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            ></input>
            <input
              className="inputdetails "
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            ></input>
            <textarea
              name="message"
              cols="30"
              rows="10"
              rerquired
              autoComplete="off"
              placeholder="Enter your message"
            ></textarea>
            <input className="sendbutton" type="submit" value="send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
