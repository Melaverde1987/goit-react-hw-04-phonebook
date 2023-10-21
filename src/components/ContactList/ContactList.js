import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactListItem
            contactName={contact.name}
            contactNumber={contact.number}
          ></ContactListItem>
          <button
            type="button"
            id={contact.name}
            className="btn btn-outline"
            onClick={onDelete}
          >
            Delete
          </button>
        </ListItem>
      ))}
    </List>
  );
};
