
import styles from './ContactList.module.css'
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/slicers/contactsSlice';

const filterContacts = (contacts, filter) => {
  return contacts.filter(({name}) => {
    return name.toLowerCase().includes(filter)
  })
}

const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  const onRemoveContact = (id) => dispatch(deleteContact(id))
  return (
    <ul>
      {
        filterContacts(contacts, filter).map(item => {
          return <li className={styles.item} key={item.id}>{item.name}: {item.number}
            <button className={styles.btnDelete} onClick={() => onRemoveContact(item.id)}>Delete</button></li> 
        })
      }
    </ul>
    
  )
}

export default ContactList;

