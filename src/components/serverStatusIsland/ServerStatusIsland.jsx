import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const shrink = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
`;

const IslandContainer = styled.div`
  z-index: 1;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 200px;
  height: 80px;
  background-color: var(--color-footer);
  border: ridge 2px var(--color-text1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${props => props.$hide ? shrink : 'none'} 1s forwards;     /* $hide: "transienten" Prop -> Styled-components wird diese Prop nicht an das DOM weitergeben. */
   
`;

const StatusText = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold !important;
  color: ${props => props.color} !important;
`;

export const ServerStatusIsland = ({ loading, error, isAwake }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let timer;
    if (isAwake) {
      timer = setTimeout(() => {
        setHide(true);
      }, 30000); // 0,5 Minute
    }
    return () => clearTimeout(timer);
  }, [isAwake]);

  let statusText = '';
  let textColor = '';

  if (loading) {
    statusText = 'Server wird gestartet...';
    textColor = 'orange';
  } else if (isAwake) {
    statusText = 'Server ist bereit';
    textColor = '#29d729';
  } else if (error) {
    statusText = 'Server-Fehler';
    textColor = 'red';
  }

  if (!loading && !isAwake && !error) return null;

  return (
    <IslandContainer $hide={hide}>
      <StatusText color={textColor}>{statusText}</StatusText>
    </IslandContainer>
  );
};

ServerStatusIsland.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  isAwake: PropTypes.bool
};