import Contact from '../models/contact.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Kontakt erfolgreich gespeichert' });
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Speichern des Kontakts', error: error.message });
  }
};