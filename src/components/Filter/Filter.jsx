import styles from './Filter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { selectors } from '../../redux';
import { setFilter } from '../../redux/slicers/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectors.selectFilter);

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