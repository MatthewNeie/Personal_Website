import React from 'react'
import Reveal from './Reveal'

const Contact = ({contactRef}) => {



  return (
    <div className="contact-container" ref={contactRef}>
        <Reveal>
        <div className="contact-title-container">
            <h1 className="contact-header">Contact me</h1>
            <p className="contact-desc">I am interested in developing web projects and freelance opportunities.
                I am currently looking for full-time employment in front-end or back-end web development.
                I am eager to improve my technical skills with any opportunity I get.</p>
        </div>
            <div className="contact-form-top">
                <label htmlFor="name"></label>
                    <input
                    className="name-input"
                    type="name"
                    id="name"
                    placeholder="Name"
                    required />
            <label htmlFor="email"></label>
            <input
                className="email-input"
                type="email"
                id="email"
                placeholder="Email"
                required />
      </div>
      <div className="contact-form-subject">
            <label htmlFor="subject"></label>
            <input
                className="subject-input"
                type="subject"
                id="subject"
                placeholder="Subject"
                required />
      </div>
      <div className="contact-form-message">
            <label htmlFor="message"></label>
            <textarea
                className="message-input"
                type="message"
                id="message"
                placeholder="Message"
                required />
      </div>
      <div className="contact-form-button-div">
          <button className="contact-form-button">Send Message</button>
      </div>
      </Reveal>
    </div>
  )
}

export default Contact
