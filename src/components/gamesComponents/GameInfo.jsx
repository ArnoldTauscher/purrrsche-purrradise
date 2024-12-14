import React, { useState } from 'react';
import { InfoIcon } from '../infoIcon/InfoIcon';

export const GameInfo = ({ Rules }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenRules = () => setIsOpen(true);
    const handleCloseRules = () => setIsOpen(false);

    return (
        <div className='game-info'>
            <div onClick={handleOpenRules} onTouchStart={handleOpenRules}>
                <InfoIcon />
            </div>
            <Rules isOpen={isOpen} onClose={handleCloseRules} />
        </div>
    );
};