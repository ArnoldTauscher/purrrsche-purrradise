import React from 'react';
import PropTypes from 'prop-types';
import './feature.css';

export const Feature = ({ title, text }) => (
  <div className="features-container__feature">
    <div className="features-container__feature-title">
      <div />
      <h3>{title}</h3>
    </div>
    <div className="features-container_feature-text centered-text">
      <p>{text}</p>
    </div>
  </div>
);

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};