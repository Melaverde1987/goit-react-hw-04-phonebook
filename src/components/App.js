import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const getLocalContacts = () => {
  const savedContacts = localStorage.getItem('contact-item');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getLocalContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contact-item', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const normalizedName = newContact.name.toLowerCase();
    let contactName = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (contactName) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  };

  const deleteContact = evt => {
    contacts.forEach(element => {
      if (element.name === evt.target.id) {
        const del = contacts.indexOf(element);
        contacts.splice(del, 1);
        localStorage.setItem('contact-item', JSON.stringify(contacts));
        setContacts(contacts);

        console.log('del', contacts);
      }
    });
  };

  const onFilter = evt => {
    let name = evt.target.value;
    setFilter(name);
  };

  const visibleContacts = contacts.filter(contact => {
    const normalizedFilter = filter.toLowerCase();
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  console.log(visibleContacts);

  return (
    <div className="card">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter inputValue={filter} handleChange={onFilter} />
      {visibleContacts.length > 0 && (
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      )}
    </div>
  );
};
