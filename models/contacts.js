const { Schema, model } = require("mongoose");

// Definiowanie schematu kontaktu
const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"], // Pole wymagane
  },
  email: {
    type: String, // Email może być pusty
  },
  phone: {
    type: String, // Telefon może być pusty
  },
  favorite: {
    type: Boolean,
    default: false, // Domyślna wartość false
  },
});

// Tworzenie modelu na podstawie schematu
const Contact = model("Contact", contactSchema);

// Funkcje CRUD
const listContacts = async () => {
  return await Contact.find(); // Pobieranie wszystkich kontaktów
};

const getContactById = async (contactId) => {
  return await Contact.findById(contactId); // Znalezienie kontaktu po ID
};

const removeContact = async (contactId) => {
  return await Contact.findByIdAndRemove(contactId); // Usunięcie kontaktu po ID
};

const addContact = async (body) => {
  return await Contact.create(body); // Dodanie nowego kontaktu
};

const updateContact = async (contactId, body) => {
  return await Contact.findByIdAndUpdate(contactId, body, { new: true }); // Aktualizacja kontaktu po ID
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
