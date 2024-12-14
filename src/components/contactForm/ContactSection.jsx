import React, { useState } from 'react';
import { Popup } from '../popup/Popup';
import { ContactForm } from './ContactForm';
import './contactsection.css';

export const ContactSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const openContactForm = () => {
        setIsOpen(true);
        setIsSubmitted(false); // Reset the submitted state when reopening the form
    };
    const closeContactForm = () => setIsOpen(false);

    const handleFormSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <>
            <div className="footer-contact-form">
                <h5>Kontakt</h5>
                <p>Haben Sie Fragen?</p>
                <p onClick={openContactForm} style={{cursor: 'pointer', textDecoration: 'underline'}}>
                    Kontaktformular
                </p>
            </div>
            <div className="popup-contact-form">
                <Popup
                    isOpen={isOpen}
                    onClose={closeContactForm}
                    title="Kontaktieren Sie uns"
                    content={
                        isSubmitted ? (
                            <p>Vielen Dank für Ihre Nachricht, Sie werden irgendwann eine Antwort erhalten.</p>
                        ) : (
                            <ContactForm onSubmit={handleFormSubmit} />
                        )
                    }
                    buttonText={isSubmitted ? "Schließen" : "Abbrechen"}
                />
            </div>
        </>
    );
}
