const Contact = require('../models/contactsModel');

// Get all data from Contacts database
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch contacts"})
    }
}

module.exports = { getContacts };