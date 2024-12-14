import React from 'react';
import { Subscribe } from '../../components';
import './header.css';
import Logo from '../../assets/companyLogo.png';

export const Header = () => {

  return (
    <header className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">'cause it's something!</h1>
        <p>Durch die geschickte Verbindung von Tradition, Fortschritt und meisterhafter Fertigung gelingt es SOMETHING stets aufs Neue — Automobile zu erschaffen, die Enthusiasten begeistern und die Grenzen des Möglichen verschieben.</p>
        <p>Wir sind sehr stolz darauf, dass wir mit unserer Modellfamilie Purrrsche schon mehr als 90 Jahre unseren Kunden Spaß und Freude beim Fahren schenken können.</p>
        <Subscribe />
      </div>
      <div className="header-logo">
        <img src={Logo} alt='Firmenlogo'></img>
      </div>
    </header>
  );
}

