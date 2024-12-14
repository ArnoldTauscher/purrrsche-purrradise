import React from 'react';
import PropTypes from 'prop-types';

export const ImageSelector = ({ onSelect, puzzleNames, getFullImage }) => {
  return (
    <div className='image-selector'>
      {puzzleNames.map((name) => (
        <div key={name} className='puzzle-option' onClick={() => onSelect(name)}>
          <img src={getFullImage(name)} alt={name} className='puzzle-thumbnail' />
        </div>
      ))}
    </div>
  );
};

ImageSelector.propTypes = {
  onSelect: PropTypes.func.isRequired,
  puzzleNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  getFullImage: PropTypes.func.isRequired,
};

