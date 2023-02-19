
import styles from './ContactList.module.css'
import { useSelector, useDispatch } from "react-redux";
import { operations, selectors } from '../../redux';

const filterContacts = (contacts, filter) => {

  return contacts.filter(({name}) => {
    return name.toLowerCase().includes(filter)
  })
}

const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);
  
  const onRemoveContact = (id) => {
   dispatch(operations.deleteContact(id))
  }

  return (
    <ul>
      {
        filterContacts(contacts, filter).map(item => {
          return <li className={styles.item} key={item.id}>{item.name}: {item.phone}
            <button className={styles.btnDelete} onClick={() => onRemoveContact(item.id)}>Delete { item.id }</button></li> 
        })
      }
    </ul>
    
  )
}

export default ContactList;

