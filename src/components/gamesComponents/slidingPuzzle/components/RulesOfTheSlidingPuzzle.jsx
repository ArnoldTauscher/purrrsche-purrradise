import React from 'react';
import { Popup } from '../../../popup/Popup';
import './rulesoftheslidingpuzzle.css';

export const RulesOfTheSlidingPuzzle = ({ isOpen, onClose }) => {

  const content = (
    <table className='game-rules'>
      <tbody>
        <tr>
          <td className='game-rules-category'>
            <h4>Bildauswahl:</h4>
          </td>
        </tr>
        <tr>
          <td className='game-rules-text'>
            <p>Wählen Sie ein Bild aus 18 verschiedenen Varianten aus, mit dem Sie spielen möchten.</p>
            <p>Alternativ können Sie sofort mit einem zufällig ausgewählten Bild beginnen.</p>
          </td>
        </tr>
        <tr>
          <td className='game-rules-category'>
            <h4>Spielbeginn:</h4>
          </td>
        </tr>
        <tr>
        <td className='game-rules-text'>
          <p>Drücken Sie den "Neues Spiel"-Button, um die Kacheln des Bildes zu mischen.</p>
          <p>Ziel ist es, das Bild durch Verschieben der Kacheln wieder in die Ausgangsposition zu bringen.</p>
        </td>
        </tr>
        <tr>
          <td className='game-rules-category'>
            <h4>Spielmechanik:</h4>
          </td>
        </tr>
        <tr>
          <td className='game-rules-text'>
            <p>Klicken Sie mit der linken Maustaste auf eine Kachel, um diese in das angrenzende leere Feld zu verschieben.</p>
          </td>
        </tr>
        <tr>
          <td className='game-rules-category'>
            <h4>Spielinformationen:</h4>
          </td>
        </tr>
        <tr>
          <td className='game-rules-text'>
            <p>Während des Spiels werden die vergangene Zeit, die Anzahl der Kachelbewegungen und die top fünf Ergebnisse angezeigt.</p>
          </td>
        </tr>
        <tr>
          <td className='game-rules-category'>
            <h4>Spielende:</h4>
          </td>
        </tr>
        <tr>
          <td className='game-rules-text'>
            <p>Sie können das Spiel jederzeit abbrechen.</p>
            <p>Das Spiel endet, wenn alle Kacheln in der richtigen Position sind.</p>
            <br/>
          </td>
        </tr>
        <tr>
          <td className='last-row'>
            <p>Dieses Puzzle fördert sowohl Geduld als auch Denkvermögen und ist bestens geeignet, 
            um Ihre kognitiven Fähigkeiten zu trainieren und die grauen Zellen in Schwung zu bringen.</p>
            <br/>
            <h4>Viel Spaß und Erfolg beim Spielen!</h4>
            <br/>
          </td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title='Schiebe-Puzzle Spielregel:'
      content={content}
      buttonClassName='rules-ok-button'
      buttonText='OK'
    />
  );
};