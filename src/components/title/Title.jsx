import React from 'react'
import PropTypes from 'prop-types';

export const Title = ({title}) => {
  return (
    <div className='title'>
    <hr/><h1>{title}</h1><hr/>
    </div>
  )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};