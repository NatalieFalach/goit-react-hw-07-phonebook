import styles from './Filter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from 'redux/selectors';
import { setFilter } from '../../redux/slicers/filterSlice'

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = (e) => {
    dispatch(setFilter(e.target.value.toLowerCase()))
  }

  return (
    <>
      <p className={styles.p}>Find contacts by name</p>
      <input className={styles.inputText} type="text" onChange={onChange} value={filter} />
    </>
  )
}

export default Filter;