import { nanoid } from "nanoid";
import styles from './ContactForm.module.css';
import { Formik, Form, Field,ErrorMessage } from 'formik'
import * as yup from 'yup';
import "yup-phone";
import { useDispatch, useSelector } from "react-redux";
import { operations, selectors } from '../../redux';
import toast, { Toaster } from 'react-hot-toast';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().phone().required()
})
 
const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.selectContacts);
  const numberId = nanoid();
  const nameId = nanoid();

  const initialValues = {
    name: '', phone: ''
  }
  
  const hendleSumbmit = (values, { resetForm }) => {
    const name = values.name.toLowerCase().trim();
    const isExists = contacts.some(item => item.name.toLocaleLowerCase() === name);
    if (isExists) {
      toast.error(`${name} is alredy in contacts`);
    } else {
      dispatch(operations.addContact(values));
    }
    resetForm();
  }

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={hendleSumbmit}>
        <Form className={styles.form}>
          <label htmlFor={nameId}>Name</label>
            <Field
              id={nameId}
              type="text"
              name="name"
            />
          <ErrorMessage className={styles.errorMessage} name="name"component='div'/>
          <label className={styles.phoneLabel} htmlFor={numberId}>Telephone</label>
            <Field
              id={numberId}
              type="tel"
              name="phone"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          <ErrorMessage className={styles.errorMessage} name="phone" component='div'/>
          <button className={styles.btnSubmit} type="submit">Add contact</button>
        </Form>
      </Formik>
      <Toaster position="top-right" />
    </>
  )
}

export default ContactForm;