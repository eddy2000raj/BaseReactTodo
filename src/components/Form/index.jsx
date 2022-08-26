import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { FaPlus } from 'react-icons/fa'

import { Input } from '../Input'
import styles from './index.module.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions';

export function Form({ clearForm }) {
  const [taskName, setTaskName] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(!!taskName) {
      const newTask = {
        id: uuid(),
        name: taskName,
        completed: false,
      }

      dispatch(addTodo(newTask));
      clearForm();
      setTaskName('')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={taskName}
        placeholder="Enter Task Name"
        onChange={event => setTaskName(event.target.value)}
      />
      
      <button
        type="submit"
        disabled={taskName === ''}
        className={styles.form__button}
      >
        <FaPlus size={12} />
        Add
      </button>
    </form>
  )
}