import React, { useState } from 'react';
import { Popup } from '../popup/Popup';
import './welcome.css';

export const Welcome = () => {
    const [isOpen, setIsOpen] = useState(true);

    const content = (
        <>
            <p>Herzlich willkommen auf meiner Webseite. Bitte beachten Sie, dass diese Webseite ausschließlich als Arbeitsprobe dient und nicht für den kommerziellen Gebrauch bestimmt ist.</p>
            <p>Das Thema ist ein fiktiver Autohersteller, der von Porsche inspiriert wurde. Alle Informationen und Daten sind rein fiktiv und dienen lediglich zu Demonstrationszwecken. Der Inhalt soll niemanden beleidigen oder verletzen.</p>
            <p>Die Webseite wird kontinuierlich weiterentwickelt und mit neuen Funktionen erweitert.</p>
            <p>Die verwendeten Bilder wurden entweder von KI generiert oder sind lizenzfrei. Das auf dieser Webseite verwendete Logo ist mein geistiges Eigentum. Eine Weiterverwendung ist nur mit meiner ausdrücklichen Genehmigung gestattet.</p>
            <p>Einige Daten werden über einen kostenfreien Server bezogen; daher kann die Datenübertragung etwas länger dauern.</p>
            <p>Ich möchte Sie darauf hinweisen, dass diese Webseite keine Cookies sammelt oder Ihre personenbezogenen Daten speichert.</p>
            <p>Gerne nehme ich Ihre Anmerkungen und Kommentare zur Webseite entgegen, die Sie über das Kontaktformular am Ende der Seite senden können.</p>
            <p>Bitte klicken Sie auf "OK", um fortzufahren.</p>
        </>
    );

    return (
        <div className='welcome-content'>
            <Popup
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title='Willkommen auf meiner Webseite!'
                content={content}
                buttonClassName='welcome-ok-button'
                buttonText='OK'
            />
        </div>
    );
}