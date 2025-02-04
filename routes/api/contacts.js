const express = require("express");
const router = express.Router();
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");

// Pobieranie wszystkich kontaktów
router.get("/", async (req, res, next) => {
  try {
    const contacts = await listContacts(); // Pobranie wszystkich kontaktów z bazy danych
    res.json(contacts);
  } catch (error) {
    next(error);
  }
});

// Pobieranie kontaktu po ID
router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId); // Pobranie kontaktu po ID
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

// Dodawanie nowego kontaktu
router.post("/", async (req, res, next) => {
  try {
    const newContact = await addContact(req.body); // Dodanie nowego kontaktu
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
});

// Usuwanie kontaktu po ID
router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const deletedContact = await removeContact(contactId); // Usunięcie kontaktu po ID
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact deleted" });
  } catch (error) {
    next(error);
  }
});

// Aktualizacja kontaktu po ID
router.put("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const updatedContact = await updateContact(contactId, req.body); // Aktualizacja kontaktu
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(updatedContact);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
