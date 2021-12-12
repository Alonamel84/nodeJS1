const argv = require('yargs').argv;
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');
// console.log(
//   listContacts(),
//   getContactById(8),
//   removeContact(6),
//   addContact('bill', 'bobby@mail.com', '050 333 55 55'),
// );

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts();
      break;

    case 'get':
      getContactById(id);
      break;

    case 'add':
      addContact(name, email, phone);
      break;

    case 'remove':
      removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
