import React, { useState, useRef, useEffect, useCallback, useMemo, useLayoutEffect } from 'react';
import shuffle from './components/shuffle';
import { DIFFICULTY_LEVELS, DIFFICULTY_LAYOUTS } from './components/constants';
import { MemoryCard } from './components/MemoryCard';
import { GameInfo } from '../GameInfo';
import { RulesOfTheMemoryGame } from './components/RulesOfTheMemoryGame';
import { MemoryWinDow } from './components/MemoryWinDow';
import BackSideImage from '../../../assets/Images/MemoryGame/backsideimage.jpeg';
import './memorygame.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../../assets/Images/MemoryGame', false, /\.(png|jpe?g|svg)$/));

const defaultState = { index: null, value: null };

export const MemoryGame = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isWinDowOpen, setIsWinDowOpen] = useState(false);
  const [difficulty, setDifficulty] = useState('Normal');
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(defaultState);
  const [secondCard, setSecondCard] = useState(defaultState);
  const [remainingCards, setRemainingCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const timer = useRef();

  const getCardCount = useCallback((level) => {
    switch(level) {
      case 'Sehr einfach': return 2;
      case 'Einfach': return 8;
      case 'Normal': return 16;
      case 'Schwierig': return 30;
      case 'Sehr schwierig': return 64;
      default: return 16;
    }
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getLayoutColumns = useMemo(() => (level) => {
    const layout = DIFFICULTY_LAYOUTS[level];
    if (screenWidth < 550 && layout.smartPhone) {
      return layout.smartPhone;
    } else if (screenWidth < 1024 && layout.tablet) {
      return layout.tablet;
    } else {
      return layout.default;
    }
  }, [screenWidth]);

  const startNewGame = useCallback((level) => {
    const numCards = getCardCount(level);
    const selectedImages = shuffle([...images]).slice(0, numCards / 2);
    const allItems = shuffle([...selectedImages, ...selectedImages]);
    setCards(allItems);
    setRemainingCards(selectedImages);
    setFirstCard(defaultState);
    setSecondCard(defaultState);
    setMoves(0);
  }, [getCardCount]);

  useEffect(() => {
    startNewGame(difficulty);
  }, [difficulty, startNewGame]);

  const handleClick = (index, value) => {
    // Restart, wenn bereits zwei Karten aufgedeckt sind
    if (firstCard.index !== null && secondCard.index !== null) {
      setFirstCard(defaultState);
      setSecondCard(defaultState);
    };

    // Verhindere erneutes Klicken auf bereits ausgewählte Karten
    if (firstCard.index === index || secondCard.index === index) return;
    
    clearTimeout(timer.current);
    
    if (firstCard.index === null) {
      setFirstCard({ index, value });
      setMoves((moves) => moves + 1);
      
      // beim Schwierigkeitsgrad "Schwierig" wird ein Timer gestartet, um die (erste) Karte zurückzudrehen, wenn der Spieler innerhalb von einer Sekunde keine zweite Karte auswählt.
      if (difficulty === 'Schwierig') {
        timer.current = setTimeout(() => {
          setFirstCard(defaultState);
        }, 1000);
      }
    } else if (secondCard.index === null && firstCard.index !== index) {
      setSecondCard({ index, value });
      setMoves((moves) => moves + 1);
  
      if (firstCard.value === value) {
        setRemainingCards(remainingCards.filter((card) => card !== value));
        setFirstCard(defaultState);
        setSecondCard(defaultState);
        if (remainingCards.length === 1) {
          handleGameOver();
        }
      } else {
        // Wenn die zwei ausgewählten Karten nicht ein Paar sind, werden die Karten nach einer Sekunde zurückgedreht.
        timer.current = setTimeout(() => {
          setFirstCard(defaultState);
          setSecondCard(defaultState);
        }, 1000);
      }
    }
  };

  const handleGameOver = () => {
    setTimeout(() => {
      setIsWinDowOpen(true);
    }, 500);  // Verzögerung von 500ms, um sicherzustellen, dass die letzte Karte umgedreht wird, bevor das Popup erscheint.
  };

  const handleCloseWinDow = () => {
    setIsWinDowOpen(false);
    startNewGame(difficulty);
  };

  return (
    <div className='memory-game'>
      <div className='memory-title'>
        <h1>Memory-Spiel</h1>
      </div>
        <GameInfo
          Rules={RulesOfTheMemoryGame}
        />
      <div>
        <h2>Schwierigkeitsgrade: </h2>
      </div>
      <div className='difficulty-selector'>
        {DIFFICULTY_LEVELS.map((level) => (
          <button
            key={level}
            className={difficulty === level ? 'active-button' : 'passive-button'}
            onClick={() => setDifficulty(level)}
          >
            {level}
          </button>
        ))}
      </div>
      <div 
        className='cards-container' 
        style={{ 
          gridTemplateColumns: `repeat(${getLayoutColumns(difficulty)}, 1fr)`,
          gridAutoRows: '1fr'
        }}
      >
        {cards.map((item, index) => (
          <MemoryCard
            key={index}
            index={index}
            item={item}
            isFlipped={firstCard.index === index || secondCard.index === index || !remainingCards.includes(item)}
            onClick={handleClick}
            backImage={BackSideImage}
          />
        ))}
      </div>
      <div>
        <h4>Züge: {moves}</h4>
      </div>
      <MemoryWinDow
        isOpen={isWinDowOpen} 
        onClose={handleCloseWinDow} 
        moveCount={moves}
      />
    </div>
  );
};