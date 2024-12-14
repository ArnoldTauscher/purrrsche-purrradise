import React from 'react';
import './library.css';
import { NuetzlicheAlltagsApps } from './nuetzlicheAlltagsApps/NuetzlicheAlltagsApps';
import { Games } from './games/Games';

export const Library = () => {
  return (
    <div className="library section__margin" id="library">
      <div className="library-content">
        <NuetzlicheAlltagsApps />
        <Games />
      </div>
    </div>
  );
}