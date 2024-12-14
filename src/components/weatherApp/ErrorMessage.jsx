import React from 'react';
import PropTypes from 'prop-types';

export const ErrorMessage = ({ message }) => (
  <div className="error-message">
    <h4 className='errortext'>Fehler: {message}</h4>
    <h4 className='errortext'>Bitte prüfen Sie, ob Ihre Angabe korrekt ist oder versuchen Sie es später erneut.</h4>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};