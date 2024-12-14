import React from 'react';
import { Popup } from '../../../popup/Popup';
import './rulesofthememorygame.css';

export const RulesOfTheMemoryGame = ({ isOpen, onClose }) => {

  const content = (
    <table className='game-rules'>
      <tbody>
        <tr>
          <td className='game-rules-category'>
            <h4>Spielziel:</h4>
          </td>
        </tr>
        <tr>
          <td className='game-rules-text'>
            <p>Finden Sie alle Kartenpaare auf dem Spielfeld.</p>
          </td>
        </tr>
        <tr>
          <td className='game-rules-category'>
            <h4>Spielvorbereitung:</h4>
          </td>
        </tr>
        <tr>
        <td className='game-rules-text'>
          <p>Wählen Sie einen Schwierigkeitsgrad aus.</p>
          <p>(Sehr einfach / Einfach / Normal / Schwierig / Sehr schwierig)</p>
        </td>
        </tr>
        <tr>
          <td className='game-rules-category'>
            <h4>Spielablauf:</h4>
          </td>
        </tr>
        <tr>
          <td className='game-rules-text'>
            <p>Klicken Sie auf die Rückseite einer beliebigen Karte, um das Spiel zu starten.</p>
            <p>Decken Sie eine zweite Karte auf, indem Sie auf ihre Rückseite klicken.</p>
            <p>Bei gleichen Bilder bleiben die aufgedeckten Karten offen liegen.</p>
            <p>Bei unterschiedliche Bilder werden die Karten wieder verdeckt.</p>
            <p>Entweder nach einer Sekunde automatisch, oder wenn Sie auf eine dritte Karte klickt.</p>
          </td>
        </tr>
        <tr>
          <td className='game-rules-category'>
            <h4>Besondere Regel für "Schwierig":</h4>
          </td>
        </tr>
        <tr>
          <td className='game-rules-text'>
            <p>Die erste aufgedeckte Karte wird wieder verdeckt, wenn Sie nicht innerhalb einer Sekunde eine zweite Karte aufdecken.</p>
          </td>
        </tr>
        <tr>
          <td className='game-rules-category'>
            <h4>Spielinformationen:</h4>
          </td>
        </tr>
        <tr>
          <td className='game-rules-text'>
            <p>Während des Spiels wird die Anzahl der Züge angezeigt</p>
          </td>
        </tr>
        <tr>
          <td className='game-rules-category'>
            <h4>Spielende:</h4>
          </td>
        </tr>
        <tr>
          <td className='game-rules-text'>
            <p>Das Spiel endet, wenn alle Kartenpaare gefunden wurden.</p>
            <br/>
          </td>
        </tr>
        <tr>
          <td className='last-row'>
            <p>Dieses Spiel trainiert Ihr Gedächtnis und Ihre Konzentrationsfähigkeit. Es eignet sich hervorragend, um Ihre kognitiven Fähigkeiten zu verbessern und Spaß zu haben.</p>
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
      title='Memory-Spiel Spielregel:'
      content={content}
      buttonClassName='rules-ok-button'
      buttonText='OK'
    />
  );
};