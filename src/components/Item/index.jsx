import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

import styles from './index.module.css'

export function Item({ id, email,first_name,last_name, onRemove }) {
  const dispatch = useDispatch();
  return (
    <li className={styles.task}>
      
      <span className={styles.task__name}>
        {first_name}
      </span>
      <span className={styles.task__name}>
        {last_name}
      </span>
      <span className={styles.task__name}>
        {email}
      </span>
      <button
        type="button"
        className={styles.task__button}
        onClick={() => onRemove(id)}
      >
        <FaTrashAlt size={16} />
      </button>
    </li>
  )
}