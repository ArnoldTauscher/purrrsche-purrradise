import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GamesNavBar, SlidingPuzzle, MemoryGame, Title } from '../../../components';
import './games.css';

export const Games = () => {
  return (
    <>
    <Title 
      title='Spiele'
    />
    <HashRouter>
      <GamesNavBar />
      <Routes>
        <Route path='/slidingPuzzle' Component={SlidingPuzzle} />
        <Route path='/memoryGame' Component={MemoryGame} />
        <Route path='/' element={<Navigate replace to='/' />} />
      </Routes>
    </HashRouter>
    </>
  )
}