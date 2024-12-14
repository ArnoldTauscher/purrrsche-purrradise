import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { submitContact } from '../../actions/contactActions';
import 'altcha';

export const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const ALTCHA_CHALLENGEURL = process.env.REACT_APP_ALTCHA_CHALLENGEURL;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(submitContact({ name, email, message }));
      setName('');
      setEmail('');
      setMessage('');
      if (onSubmit) onSubmit(); // Schließt das Popup nach dem Absenden
    };
  
    return (
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail"
          required
        />
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ihre Nachricht"
          required
        />
        <altcha-widget          
          challengeurl={ALTCHA_CHALLENGEURL}
        ></altcha-widget>
        <button className="submit-button" type="submit">&nbsp;Absenden&nbsp;</button>
      </form>
    );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};