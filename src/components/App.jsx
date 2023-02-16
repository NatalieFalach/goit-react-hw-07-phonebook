import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"
import styles from './App.module.css'
import ContactForm from "./ContactForm/ContactForm"

export function App() {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.phonebook}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.contacts}>Contacts</h2>
        <Filter/>
        <ContactList/>
    </div>
  )
}







