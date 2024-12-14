import React, { useState, useEffect } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { CatIcon } from '../catIcon/CatIcon';
import './navbar.css';

const Menu = ({ toggleTheme, isMobile }) => (
  <>
    <h3><a href="#whatIsSomething">Was ist SOMETHING?</a></h3>
    <h3><a href="#models">Modelle</a></h3>
    <h3><a href="#news">Nachrichten</a></h3>
    <h3><a href="#library">Bibliothek</a></h3>
    {isMobile && (
      <CatIcon onClick={toggleTheme} className="mobile" />
    )}
  </>
)

export const NavBar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1150);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="navbar-content">
        <div className="top-row">
          <h1><a href="#home">something</a></h1>
          {!isMobile && (
            <CatIcon onClick={toggleTheme} className="desktop" />
          )}
        </div>
        {!isMobile && (
            <nav className="nav-menu">
              <Menu isDarkMode={isDarkMode} toggleTheme={toggleTheme} isMobile={isMobile} />
            </nav>
        )}
        {isMobile && (
          <>
            <div className="hamburger-icon">
              <RiMenu3Line size={27} onClick={toggleMenu} />
            </div>
            {isMenuOpen && (
              <nav className="nav-menu active" onMouseLeave={closeMenu}>
                <div className="navbar-menu_container scale-up-center">
                  <Menu isDarkMode={isDarkMode} toggleTheme={toggleTheme} isMobile={isMobile} />
                </div>
              </nav>
            )}
          </>
        )}
      </div>
      <div className="collapse-button" onClick={toggleCollapse}>
        {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};