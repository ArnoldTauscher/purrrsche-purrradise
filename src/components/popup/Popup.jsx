import React from 'react';
import PropTypes from 'prop-types';
import './popup.css';

export const Popup = ({ isOpen, onClose, title, content, buttonText, buttonClassName }) => {
    if (!isOpen) return null;

    return (
        <div className='popup'>
            <div className='popup-content'>
                <h1>{title}</h1>
                {content}
                <button className={`ok-button ${buttonClassName || ''}`} onClick={onClose}>
                    {buttonText || 'OK'}
                </button>
            </div>
        </div>
    );
}

Popup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    content: PropTypes.object.isRequired,
    buttonText: PropTypes.string,
    buttonClassName: PropTypes.string,
};