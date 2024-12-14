import React from 'react';
import PropTypes from 'prop-types';
import { getFullImage } from '../utils/imageUtils';
import './puzzlewindow.css';

export const PuzzleWinDow = ({ isOpen, onClose, puzzle, timer, moveCount }) => {
  if (!isOpen) return null;
  return (
    <div className='window'>
      <div className='window-content scale-up-center'>
        <img src={getFullImage(puzzle)} alt={puzzle} className='solution-image' />
        <p>Gratulation! Sie haben das Puzzle gelöst!</p>
        <p>Zeit: {timer} Sekunden</p>
        <p>Bewegungen: {moveCount}</p>
        <button className='game-ok-button' onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

PuzzleWinDow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  puzzle: PropTypes.string,
  timer: PropTypes.number,
  moveCount: PropTypes.number,
};