import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

// using State to display errors
function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  //submit data 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
    }
  };

  //handles which error you receive
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  //returns the contact form
  return (
    <section>
      <h1 className='view-name'>Contact me</h1>
      <container className="form-container">
      <form id="contact-form" onSubmit={handleSubmit}>        
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="name">Name:</label>
          <input className="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">Email address:</label>
          <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="message">Message:</label>
          <textarea className="form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="btn btn-primary btn-block mb-4" type="submit">Submit</button>
      </form>
      </container>
    </section>
  );
}

export default ContactForm;
