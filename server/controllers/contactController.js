import Contact from '../models/contact.js';

// Speichert eine neue Kontaktanfrage in der Datenbank.
export const createContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Validierung: Alle Felder müssen ausgefüllt sein
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Alle Felder sind erforderlich' });
    }

    // E-Mail-Format prüfen
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Ungültiges E-Mail-Format' });
    }

    // Kontakt speichern
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    return res.status(201).json({ message: 'Kontakt erfolgreich gespeichert' });

  } catch (error) {
    console.error('Fehler in createContact:', error);
    next(error);
  }
};