// Diese Hilfsfunktionen helfen beim Abrufen der Bildpfade und der verfügbaren Puzzle-Namen.
const images = require.context('../../../../assets/Images/SlidingPuzzle', true, /\.(png|jpe?g|svg)$/);

export const getFullImage = (name) => {
  const formats = ['png', 'jpg', 'jpeg', 'svg'];
  for (let format of formats) {
    try {
      return images(`./${name}/full.${format}`);
    } catch (error) {
      // Wenn das Bild in diesem Format nicht gefunden wird, versuchen wir das nächste
      continue;
    }
  }
  throw new Error(`Vollbild für ${name} nicht gefunden`);
};

export const getTileImages = (name) => {
  return Array.from({ length: 9 }, (_, i) => {
    const formats = ['png', 'jpg', 'jpeg', 'svg'];
    for (let format of formats) {
      try {
        return images(`./${name}/${i + 1}.${format}`);
      } catch (error) {
        // Wenn das Bild in diesem Format nicht gefunden wird, versuchen wir das nächste
        continue;
      }
    }
    throw new Error(`Kachel ${i + 1} für ${name} nicht gefunden`);
  });
};

export const getPuzzleNames = () => {
  return images.keys()
    .map(path => path.split('/')[1])
    .filter((value, index, self) => self.indexOf(value) === index);
};