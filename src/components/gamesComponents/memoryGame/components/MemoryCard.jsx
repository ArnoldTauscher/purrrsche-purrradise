import React from 'react';
import PropTypes from 'prop-types';

export const MemoryCard = React.memo(({ index, item, isFlipped, onClick, backImage }) => (
  <div
    role='button'
    aria-label={`Memory card ${index + 1}`}
    tabIndex={0}
    className={`card ${isFlipped ? 'flipped' : ''}`}
    onClick={() => onClick(index, item)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick(index, item);
      }
    }}
  >
    <div className='back-side'>
      <img src={backImage} alt='Rückseite' />
    </div>
    <img src={item} alt={`Memory card ${index}`} className='front-side' />
  </div>
));

MemoryCard.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  backImage: PropTypes.string.isRequired,
};