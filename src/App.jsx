import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phone<span className={css.span}>book</span>
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
