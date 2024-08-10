import React from 'react';

function ContactPage() {
  return (
    <div>
      <main>
        <h1 className="title">Contact</h1>
        <p className="description">Get in touch with us for more information.</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value="natcurls@gmail.com" readOnly/>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}

export default ContactPage;
