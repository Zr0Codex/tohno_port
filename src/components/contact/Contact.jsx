import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { RiLineLine } from 'react-icons/ri';

import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yhmyh7q',
        'template_wbpqpbr',
        form.current,
        'Po8nwYiPRh331wRCkt'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tontrakanpy@hotmail.com</h5>
            {/* eslint-disable-next-line */}
            <a href="mailto:tontrakanpy@hotmail.com" target="_blank">
              Send me a message
            </a>
          </article>
          <article className="contact__option">
            <RiLinkedinBoxFill className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Tontrakan</h5>
            <a href="https://www.linkedin.com/in/tontrakan-noime-a98358168/">
              Send me a message
            </a>
          </article>
          <article className="contact__option">
            <RiLineLine className="contact__option-icon" />
            <h4>Line</h4>
            <h5>Ton</h5>
            {/* eslint-disable-next-line */}
            <a href="https://line.me/ti/p/~xcalculusx" target="_blank">
              Send me a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
