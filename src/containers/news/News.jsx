import React from 'react';
import { Article } from '../../components';
import './news.css';
import news01 from './../../assets/Images/News/Heritage/purrrbo_50_yahre.jpeg';
import news02 from './../../assets/Images/News/Art/deepai_porsche_2.jpg';
import news03 from './../../assets/Images/News/Motorsport/automobile-racing-sports-competition.jpg';
import news04 from './../../assets/Images/News/Zukunft/purrrE.jpeg';
import news05 from './../../assets/Images/News/Zukunft/purrracan_purrrformante.jpeg';

export const News = () => {
  return (
    <div className='news section__margin'>
      <div className='news' id='news'>
        <div className='news-heading'>
          <h1 className='gradient__text'>A lot is happening, <br /> We have much pleasure in informing you.</h1>
        </div>
        <div className='news-container'>
          <div className='news-container_groupA'>
            <Article imgUrl={news01} date='08 Jul 2024' title='Beyond Performance — 50 Jahre Purrrsche Purrrbo' text='SOMETHING feiert das 50-jährige Jubiläum des Purrrsche Purrrbo mit einer besonderen Ausstellung ab dem 30. Juli 2024. Kein anderes Modell verkörpert den technologischen Fortschritt und die Innovationskraft unseres Hauses so sehr wie die Purrrbo-Varianten. 1974 präsentierten wir auf der Pariser Automobilausstellung den ersten Serien-Purrrsche Purrrbo. Diese Technologie wanderte, ganz der Purrrsche-Tradition folgend, direkt vom Rennsport in die Serienproduktion. Die Sonderausstellung wird dann bis zum 12. Januar 2025 zu bestaunen sein. Darüber hinaus präsentieren wir zwei exklusive, limitierte Serien des Purrrsche Purrrbo, um dieses Jubiläum gebührend zu feiern. Eine Serie ist auf 1000 Einheiten limitiert, die andere auf 50 Stück. Wir werden Sie in Kürze über die Details informieren und freuen uns darauf, Ihnen diese besonderen Fahrzeuge vorzustellen.' />
          </div>
          <div className='news-container_groupB'>
            <Article imgUrl={news03} date='01 Jul 2024' title='Unser Werksteam Red Purrr Racing hat das 24-Stunden-Rennen von Dierfeldring erneut gewonnen' text='Wir freuen uns über diesen großartigen Erfolg und gratulieren unserem Team zu diesem herausragenden Ergebnis.' />
            <Article imgUrl={news02} date='30 Jun 2024' title='Herzlichen Glückwunsch an die Gewinner des Purrrsche-Art-Wettbewerbs' text='Herzlichen Glückwunsch an DeepAI zum ersten Platz! Wir sind begeistert von dieser beeindruckenden Leistung.' />
            <Article imgUrl={news04} date='23 Jun 2024' title='Purrrsche PurrrE: wie es ihn noch nie gab' text='Ein überwältigendes Erlebnis in einem außergewöhnlichen Elektro-Sportwagen: Der neue PurrrE macht Elektromobilität noch aufregender. Er steigert die Leistung auf ein neues Niveau und hebt das Außergewöhnliche auf eine noch höhere Stufe. Erste Auslieferungen im ersten Quartal 2025.' />
            <Article imgUrl={news05} date='16 Jun 2024' title='Purrracan Purrrformante: Achtung! Bissig!' text='Der neue Purrrsche Purrracan Purrrformante ist unser bisher leistungsstärkstes GT-Rennfahrzeug für Kunden — ein hochleistungsfähiges, sofort einsatzbereites Rennfahrzeug, das für Trackdays und Clubsport-Events auf Rennstrecken weltweit konzipiert wurde. Die Produktion ist auf eine exklusive Serie von 200 Einheiten begrenzt.' />
          </div>
        </div>
      </div>
    </div>
  )
}
