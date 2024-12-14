import React from 'react'
import { NavLink } from 'react-router-dom';

export const GamesNavBar = () => {
  return (
    <>
        <div className='games-navbar'>
            <h2>Wählen Sie ein Spiel aus:</h2>
            <h4>
                <NavLink to='/slidingPuzzle' className={({ isActive }) => isActive ? 'active-link' : ''}>Schiebe-Puzzle</NavLink>
            </h4>
            <h4>
                <NavLink to='/memoryGame' className={({ isActive }) => isActive ? 'active-link' : ''}>Memory-Spiel</NavLink>
            </h4>
        </div>
    </>
  )
}