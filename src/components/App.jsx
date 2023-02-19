import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"
import styles from './App.module.css'
import ContactForm from "./ContactForm/ContactForm"
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { operations, selectors } from "../redux/";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getIsLoading);
  const error = useSelector(selectors.getError);
  
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
        <h1 className={styles.phonebook}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.contacts}>Contacts</h2>
        <Filter />
        {isLoading && !error && <div>Loading...</div>}
        <ContactList/>
    </div>
  )
}







