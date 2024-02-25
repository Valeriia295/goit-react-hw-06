import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name).toLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  if (filteredContacts.length === 0) {
    return (
      <div className={css.text}>
        <p>No contacts found.</p>
      </div>
    );
  }

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map(item => (
          <li key={item.id} className={css.item}>
            <Contact item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
