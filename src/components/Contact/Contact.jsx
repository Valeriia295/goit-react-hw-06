import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { BsPersonFill, BsTelephoneFill } from 'react-icons/bs';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <p className={css.text}>
          <BsPersonFill className={css.icon} size="18px" />
          {item.name}
        </p>
        <p className={css.text}>
          <BsTelephoneFill className={css.icon} size="16px" />
          {item.number}
        </p>
      </div>

      <button className={css.button} type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </>
  );
}
