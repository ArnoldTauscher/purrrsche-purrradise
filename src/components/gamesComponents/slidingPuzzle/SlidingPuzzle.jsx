import React, { useState, useCallback, useRef } from 'react';
import { PuzzleGrid } from './components/PuzzleGrid';
import { PuzzleWinDow } from './components/PuzzleWinDow';
import { ImageSelector } from './components/ImageSelector';
import { getFullImage, getTileImages, getPuzzleNames } from './utils/imageUtils';
import { getRandomPuzzle, updateTopScores } from './utils/puzzleUtils';
import { GameInfo } from '../GameInfo';
import { RulesOfTheSlidingPuzzle } from './components/RulesOfTheSlidingPuzzle';
import './slidingpuzzle.css';

export const SlidingPuzzle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWinDowOpen, setIsWinDowOpen] = useState(false);
  const [puzzleKey, setPuzzleKey] = useState(Date.now());
  const [showFullImage, setShowFullImage] = useState(true);
  const [moveCount, setMoveCount] = useState(0); // Zähler für Bewegungen
  const [timer, setTimer] = useState(0); // Timer für die Spielzeit
  const [intervalId, setIntervalId] = useState(null); // Für den Timer
  const [topScores, setTopScores] = useState([]); // Top-Fünf-Ergebnisse
  
  const puzzleNames = getPuzzleNames();
  const moveCountRef = useRef(0);

  const incrementMoveCount = useCallback(() => {
    moveCountRef.current += 1;
    setMoveCount(moveCountRef.current);
  }, []);

  const [selectedPuzzle, setSelectedPuzzle] = useState(() => getRandomPuzzle(puzzleNames));

  const resetGame = useCallback(() => {
    setTimer(0);
    setMoveCount(0);
    moveCountRef.current = 0;
    if (intervalId) {
      clearInterval(intervalId); // Timer anhalten
      setIntervalId(null); // Interval ID zurücksetzen
    }
  }, [intervalId]);

  const startGame = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setShowFullImage(true);
      resetGame();
    } else {
      setIsPlaying(true);
      setShowFullImage(false);
      setPuzzleKey(Date.now());
      startTimer();
    }
  };

  const startTimer = () => {
    setTimer(0);
    const id = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    setIntervalId(id); // Speichere die Interval-ID
  };

  const handlePuzzleSelect = useCallback((puzzleName) => {
    if (isPlaying) {
      // Wenn das Spiel aktiv ist, machen wir nichts
      return;
    }
    setSelectedPuzzle(puzzleName);
    setIsPlaying(false);
    setShowFullImage(true);
    resetGame();
  }, [isPlaying, resetGame]);

  const handleGameOver = useCallback(() => {
    setIsPlaying(false);
    clearInterval(intervalId); // Timer anhalten
    const newScore = { time: timer, moves: moveCountRef.current };
    setTopScores(prevScores => updateTopScores(newScore, prevScores)); // Ergebnisse aktualisieren
    setIsWinDowOpen(true);
  }, [intervalId, timer]);

  const handleCloseWinDow = () => {
    setIsWinDowOpen(false);
    resetGame();
  };

  const midPoint = Math.ceil(puzzleNames.length / 2);
  const leftPuzzles = puzzleNames.slice(0, midPoint);
  const rightPuzzles = puzzleNames.slice(midPoint);

  return (
    <div className='sliding-puzzle'>
      <div className='puzzle-title'>
        <h1>Schiebe-Puzzle</h1>
        <GameInfo
          Rules={RulesOfTheSlidingPuzzle}
        />
      </div>
      <div className='puzzle-container'>
      <div className='images-1'>
        <ImageSelector
          puzzleNames={leftPuzzles}
          onSelect={handlePuzzleSelect}
          getFullImage={getFullImage}
        />
        </div>
        <div className='game-field'>
        <PuzzleGrid
          key={puzzleKey}
          gridType='game'
          selectedPuzzle={selectedPuzzle}
          isPlaying={isPlaying}
          showFullImage={showFullImage}
          tileImages={selectedPuzzle ? getTileImages(selectedPuzzle) : []}
          onGameOver={handleGameOver}
          incrementMoveCount={incrementMoveCount}
        />
        </div>
        <div className='images-2'>
        <ImageSelector
          puzzleNames={rightPuzzles}
          onSelect={handlePuzzleSelect}
          getFullImage={getFullImage}
        />
        </div>
      </div>
      <div className='puzzle-info'>
        <div className='puzzle-stats'>
          <h4>Zeit: {timer} Sekunden</h4>
          <h4>Züge: {moveCount}</h4>
        </div>
        <button className='sliding-puzzle-button' onClick={startGame} disabled={!selectedPuzzle}>
          {isPlaying ? 'Aufgeben' : 'Neues Spiel'}
        </button>
        <div className='top-scores'>
          <h2>Top 5 Ergebnisse</h2>
          <table className='top-scores-table'>
            <thead>
              <tr height={40}>
                <th width={60}><h4>Platz:</h4></th>
                <th width={60}><h4>Zeit:</h4></th>
                <th width={60}><h4>Züge:</h4></th>
              </tr>
            </thead>
            <tbody>
            {topScores.map((score, index) => (
              <tr key={index}>
                <td width={60}><h4>{`${index+1}.`}</h4></td>
                <td width={60}><h4>{`${score.time} s`}</h4></td>
                <td width={60}><h4>{score.moves}</h4></td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
      <PuzzleWinDow
        isOpen={isWinDowOpen} 
        onClose={handleCloseWinDow} 
        puzzle={selectedPuzzle} 
        timer={timer}
        moveCount={moveCount}
      />
    </div>
  );
};
