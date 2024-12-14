import React from 'react';
import PropTypes from 'prop-types';
import './memorywindow.css';

export const MemoryWinDow = ({ isOpen, onClose, moveCount }) => {
    if (!isOpen) return null;
    return (
      <div className='window'>
        <div className='window-content'>
          <h1>Sieg!</h1>
          <h2>Züge: {moveCount}</h2>
          <button className='game-ok-button' onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    );
  };

MemoryWinDow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  moveCount: PropTypes.number,
};