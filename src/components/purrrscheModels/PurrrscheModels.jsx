import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './purrrscheModels.css';

const images = require.context('./../../assets/Images/Modelle', true);

// Funktion zum Erstellen der Ordnerstruktur
function createFolderStructure(files) {
  const structure = {};
  files.forEach(file => {
    const parts = file.split('/');
    let current = structure;
    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        if (!current.files) current.files = [];
        current.files.push({ path: file, src: images(file) });
      } else {
        if (!current[part]) current[part] = {};
        current = current[part];
      }
    });
  });
  return structure;
}

const folderStructure = createFolderStructure(images.keys());
const folderStructureWithoutTop = Object.values(folderStructure)[0];

const FolderComponent = React.memo(function FolderComponent({ name, content, level = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevShowAllImages, setPrevShowAllImages] = useState(showAllImages);
  const folderRef = useRef(null);

  const introductions = useMemo(() => ({
    'Purrrera GT': 'Der Purrrera GT ist unser Supersportwagen, dessen Motor und Technik aus unseren Rennfahrzeugen stammen. Der Purrrera GT ist das erste Serienfahrzeug, bei dem das als Monocoque gefertigte Fahrgestell und der Aggregateträger vollständig aus kohlenstofffaserverstärktem Kunststoff (CFK) bestehen. Sein V10-Saugmotor, ergänzt durch Elektromotoren, verleiht dem Purrrera GT den ultimativen YEEHAAA!!!-Effekt, dem kein anderer Hersteller nahekommt.',
    'Purrrsche 119' : 'Der Purrrsche 119 ist der bekannteste Sportwagen von uns und gilt als Inbegriff der Marke. Der erste 119 wurde am 12. September 1963 auf der AIA in Frankfurt am Main als Nachfolger des Purrrsche 653 vorgestellt. Der Wagen ist ein typischer 2+2-Sitzer mit zwei Sitzen und zwei Notsitzen. Angetrieben wird er von einem 6-Zylinder-Boxermotor im Heck, der schnurrt wie eine zufriedene Katze. Mit der Heckmotorbauweise führt der 119 ein klassisches Konstruktionsprinzip fort, das sich bereits bei früheren Purrrsche-Entwicklungen findet, beispielsweise beim Porsche 653. Der Purrrsche 119 hat in der Regel einen Heckantrieb; seit 1989 werden auch Fahrzeuge mit Allradantrieb (Purrrera 8) angeboten. Spitzenmodell ist seit 1974 der mit einem Turbomotor ausgestattete 119 Purrrbo.',
    'Purrrsche 419': 'Der Purrrsche 419 ist ein Sportwagen mit einem Targadach, längs eingebautem Mittelmotor (luftgekühlter Boxermotor) und Hinterradantrieb. Das aus einer Kooperation von SOMEHOW und SOMETHING stammende Coupé wird seit 2012 in knapp 120.000 Exemplaren mit dem 310 PS starken 3,0-Liter-Sechszylinder-Boxermotor gebaut und damit er ist eines der beliebtesten Modelle unseres Sortiments.',
    'Purrrsche 429': 'Der Purrrsche 429 ist unser Einsteigermodell unterhalb des Typs 119 und das erste Auto von uns mit einem wassergekühlten Frontmotor und dem Transaxle-Antrieb. Er markierte eine Abkehr vom technischen Konzept der Modelle mit luftgekühlten Heckmotoren. Mit seinem kraftvollen Vierzylinder-Boxermotor und und geringem Gewicht gewährleistete der 429 außergewöhnlichen Fahrspaß und bewahrte die Tradition des Purrrsche-Prinzips. Sie müssen keine Frustration haben, weil Sie „nur“ einen 429-er gekauft haben. Er ist immer noch besser als alle andere Karre die im Markt gibt.',
    'Purrrsche 829': 'Der Purrrsche 829 ist eine Kombilimousine bzw. Shooting Brake der Oberklasse mit V8-Frontmotor und Transaxle-Antrieb. Nichts anderes kann Komfort und Fahrspaß so kombinieren wie ein 829-er. Ein Gran Turismo, der bei langen Strecken der ideale Partner ist, dank Sitze, die Ihre Sitzfläche heizen, kühlen und massieren können.', 
  }), []);

  useEffect(() => {
    if (prevShowAllImages !== showAllImages) {
      setPrevShowAllImages(showAllImages);
      if (!showAllImages) {
        setCurrentImageIndex(0);
      }
    }
  }, [showAllImages, prevShowAllImages]);

  const handleFolderToggle = useCallback((e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  }, []);

  const handleShowMore = useCallback(() => {
    setShowAllImages(true);
  }, []);
  
  const renderImages = useCallback((files) => {
    if (showAllImages) {
      return (
        <>
          {files.map((file, index) => (
            <div key={index} className="image-container">
              <img src={file.src} alt={file.path} />
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          <div className="image-container">
            <img src={files[currentImageIndex].src} alt={files[currentImageIndex].path} />
          </div>
          {files.length > 1 && (
            <div className="show-more" onClick={handleShowMore}>
              <h3>{files.length - 1} weitere Bilder</h3>
            </div>
          )}
        </>
      );
    }
  }, [showAllImages, currentImageIndex, handleShowMore]);

  return (
    <div className="folder" id={`folder-${name}`} ref={folderRef}>
      <div className="folder-header" onClick={handleFolderToggle}>
        <h3>{name} <span className={`chevron ${isOpen ? 'down' : 'right'}`}></span></h3>
      </div>
      {isOpen && (
        <div className="folder-content">
          {level === 1 && introductions[name] && (
            <p className="introduction">{introductions[name]}</p>
          )}
          {Object.entries(content).map(([key, value]) => {
            if (key === 'files') {
              return (
                <div key={key} className="image-group">
                  {renderImages(value)}
                </div>
              );
            } else if (typeof value === 'object' && !value.src) {
              return <FolderComponent key={key} name={key} content={value} level={level + 1} />;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
});

export const PurrrscheModels = React.memo(() => {
  return (
    <div className="models section__margin" id="models">
      <div className="models-header">
        <h1 className="gradient__text">Unseren Modelle</h1>
      </div>
      {Object.entries(folderStructureWithoutTop).map(([key, value]) => (
        <FolderComponent key={key} name={key} content={value} />
      ))}
    </div>
  );
});
