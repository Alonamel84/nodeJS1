const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./dp/contacts.json');

function listContacts() {
  fs.readFile(contactsPath, 'utf-8')
    .then(data => console.table(JSON.parse(data)))
    .catch(err => err.message);
}

function getContactById(contactId) {
  const idName = contactId.toString();
  return fs
    .readFile(contactsPath)
    .then(data => {
      const contactById = JSON.parse(data).find(contact => contact.id === idName);
      console.table(contactById);
      return contactById;
    })
    .catch(err => console.log(err.message));
}

function removeContact(contactId) {
  const idName = contactId.toString();
  return fs
    .readFile(contactsPath)
    .then(data => {
      const contactById = JSON.parse(data).filter(contact => contact.id !== idName);
      console.table(contactById);
      return contactById;
    })
    .catch(err => err.message);
}

function addContact(name, email, phone) {
  return fs
    .readFile(contactsPath)
    .then(data => {
      const uniqid = require('uniqid');
      const contactList = JSON.parse(data);
      const newContact = JSON.stringify(contactList.push({ id: uniqid(), name, email, phone }));
      console.table(contactList);
      fs.writeFile(contactsPath, JSON.stringify(contactList));
    })
    .catch(err => err.message);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
