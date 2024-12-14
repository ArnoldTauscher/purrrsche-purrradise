import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { checkSolved, isAdjacent, findEmptyTile, solvedGrid, createSolvablePuzzle } from '../utils/puzzleUtils';
import { getFullImage } from '../utils/imageUtils';

export const PuzzleGrid = React.memo(({
  gridType,
  selectedPuzzle,
  isPlaying,
  showFullImage,
  tileImages,
  onGameOver,
  puzzles,
  onSelect,
  incrementMoveCount
}) => {
  const size = 3; // 3x3 Grid
  const emptyId = '9';

  const [grid, setGrid] = useState([]);

  const startGame = useCallback(() => {
    if (gridType === 'game' && selectedPuzzle) {
      setGrid(createSolvablePuzzle(size, emptyId));
    }
  }, [gridType, selectedPuzzle]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const handleClick = (rowIndex, colIndex) => {
    if (gridType === 'selector') {
      const puzzleIndex = rowIndex * size + colIndex;
      if (puzzleIndex < puzzles.length) {
        onSelect(puzzles[puzzleIndex]);
      }
    } else if (isPlaying) {
      const [emptyRow, emptyCol] = findEmptyTile(grid, size);
      if (isAdjacent(rowIndex, colIndex, emptyRow, emptyCol)) {
        const newGrid = grid.map(row => [...row]);
        [newGrid[rowIndex][colIndex], newGrid[emptyRow][emptyCol]] = 
          [newGrid[emptyRow][emptyCol], newGrid[rowIndex][colIndex]];
        setGrid(newGrid);
        incrementMoveCount();
        if (checkSolved(newGrid)) {
          onGameOver();
        }
      }
    }
  };

  if (gridType === 'selector') {
    return (
      <div className='puzzle-grid selector-grid'>
        {puzzles.map((puzzle) => (
          <div
            key={puzzle}
            className={`puzzle-tile selector-tile ${selectedPuzzle === puzzle ? 'selected' : ''}`}
            onClick={() => onSelect(puzzle)}
          >
            <img src={getFullImage(puzzle)} alt={puzzle} className='tile-image' />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='puzzle-grid game-grid'>
      {(showFullImage ? solvedGrid(size) : grid).map((row, rowIndex) => (
        row.map((tile, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className='puzzle-tile'
            onClick={() => handleClick(rowIndex, colIndex)}
          >
            {showFullImage || tile !== emptyId ? (
              <img
                src={tileImages[parseInt(tile) - 1]}
                alt={tile}
                className='tile-image'
              />
            ) : null}
          </div>
        ))
      ))}
    </div>
  );
});

PuzzleGrid.propTypes = {
  gridType: PropTypes.oneOf(['game', 'selector']).isRequired,
  selectedPuzzle: PropTypes.string,
  isPlaying: PropTypes.bool,
  showFullImage: PropTypes.bool,
  tileImages: PropTypes.arrayOf(PropTypes.string),
  onGameOver: PropTypes.func,
  puzzles: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
  incrementMoveCount: PropTypes.func.isRequired,
};






