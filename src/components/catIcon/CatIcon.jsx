import React from 'react';
import { ReactComponent as CatIconSVG } from '../../assets/cat-solid.svg';
import PropTypes from 'prop-types';

export const CatIcon = ({ onClick, className }) => {
    return (
        <div className={`theme-toggle-icon-container ${className}`}>
            <div className='theme-toggle-icon-light'>
                <CatIconSVG onClick={onClick} className={`cat-light`} />
            </div>
            <div className='theme-toggle-icon-dark'>
                <CatIconSVG onClick={onClick} className={`cat-dark`} />
            </div>
        </div>
    );
};

CatIcon.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
};