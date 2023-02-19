
import styles from './ContactList.module.css'
import { useSelector, useDispatch } from "react-redux";
import { operations, selectors } from '../../redux';

const ContactList = () => {

  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectors.selectFilteredContacts);
  
  const onRemoveContact = (id) => {
   dispatch(operations.deleteContact(id))
  }

  return (
    <ul>
      {
        filteredContacts.map(item => {
          return <li className={styles.item} key={item.id}>{item.name}: {item.phone}
            <button className={styles.btnDelete} onClick={() => onRemoveContact(item.id)}>Delete</button></li> 
        })
      }
    </ul>
    
  )
}

export default ContactList;

