import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';
// import { checkPassword, validateEmail } from '../../utils/helpers';


export default function Contact() {


  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };



  return (
    <div>
      <h2>Contact Me</h2>


      <form className="form">
        <h3>Name:</h3>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />

        <h3>Email Address:</h3>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />

        {/* <input
          id="message_input"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
          required='true'
        /> */}
        <h3>Message:</h3>
        <textarea 
          id="message_input"
          class="form-control"
          value={message}
          name="message"
          onChange={handleInputChange} 
          rows="3" 
          placeholder="message" 
          required
        ></textarea>

      </form>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

      <button class="btn" type="button" onClick={handleFormSubmit}>Submit</button>
    </div>
  );
}
