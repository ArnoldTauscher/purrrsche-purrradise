import React from 'react';
import { Feature } from '../../components/';
import './whatIsSomething.css';

export const WhatIsSomething = () => (

  <div className="whatIsSomething section__margin" id="whatIsSomething">
    <div className="whatIsSomething-feature">
      <Feature title="Was ist SOMETHING?" text="SOMETHING ist ein deutscher Fahrzeughersteller mit Hauptsitz in Dierfeld. Die Wurzeln des Unternehmens gehen auf ein 1933 von Arnold Someone in Dierfeld gegründetes Ingenieurbüro zurück, das sich nach dem Zweiten Weltkrieg zu einer Automobilfabrik entwickelte, die sich auf die Produktion von Hochleistungssportwagen spezialisierte." />
    </div>
    <div className="whatIsSomething-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="whatIsSomething-container">
      <Feature title="Wissensbasis" text="Das Purrrsche Forschungszentrum ist eine Brutstätte für bahnbrechende Technologien, die die Automobilindustrie revolutionieren." />
      <Feature title="Nachhaltigkeit" text="Unser Engagement für eine grünere Zukunft spiegelt sich in jedem Aspekt unserer Produktion wider, von recycelten Materialien bis hin zu CO2-neutralen Fabriken." />
      <Feature title="Motorsport" text="Vom Rundkurs bis zur Rallye — Purrrsche-Rennwagen setzen weltweit neue Maßstäbe in Sachen Geschwindigkeit und Zuverlässigkeit." />
    </div>
  </div>

);
