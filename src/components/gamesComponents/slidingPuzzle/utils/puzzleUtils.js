// zusätzliche Hilfsfunktionen für das Puzzle
// PuzzleGrid.jsx
export const checkSolved = (grid) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] !== String(i * 3 + j + 1)) return false;
    }
  }
  return true;
};

export const isSolvable = (array, size, emptyId) => {
  let inversions = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j] && array[i] !== emptyId && array[j] !== emptyId) {
        inversions++;
      }
    }
  }
  let emptyRow = Math.floor(array.indexOf(emptyId) / size);
  return (inversions + emptyRow) % 2 === 0;
};

export const findEmptyTile = (grid, size) => {
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (grid[row][col] === String(size * size)) {
        return [row, col];
      }
    }
  }
};

export const isAdjacent = (row1, col1, row2, col2) => {
  return (Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1);
};

export const solvedGrid = (size) => {
  return Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => ((i * size + j + 1)).toString())
  );
};

export const createSolvablePuzzle = (size, emptyId) => {
  let tileArray;
  do {
    tileArray = Array.from({ length: size * size }, (_, i) => (i + 1).toString())
      .sort(() => Math.random() - 0.5);
  } while (!isSolvable(tileArray, size, emptyId));

  const newGrid = [];
  for (let i = 0; i < size; i++) {
    newGrid.push(tileArray.slice(i * size, (i + 1) * size));
  }
  return newGrid;
};

// SlidingPuzzle.jsx
export const getRandomPuzzle = (puzzleNames) => {
  const randomIndex = Math.floor(Math.random() * puzzleNames.length);
  return puzzleNames[randomIndex];
};

export const updateTopScores = (newScore, prevScores) => {
  return [...prevScores, newScore]
    .sort((a, b) => a.time - b.time || a.moves - b.moves)
    .slice(0, 5);
};