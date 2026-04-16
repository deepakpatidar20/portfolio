import React from "react";

function Contact() {
  return (
    <section className="contact">

      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">

        {/* Left Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            If you have any project or want to collaborate, feel free to contact me.
          </p>

          <p><strong>Email:</strong> deepakpatidarwork@gmail.com</p>
          <p><strong>Phone:</strong> +91 9981330636</p>
          <p><strong>Location:</strong> Indore</p>
        </div>

        {/* Form */}
        <form className="contact-form">

          <input 
            type="text" 
            placeholder="Your Name" 
            required 
          />

          <input 
            type="email" 
            placeholder="Your Email" 
            required 
          />

          <textarea 
            rows="5" 
            placeholder="Your Message" 
            required
          ></textarea>

          <button type="submit" className="btn">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;