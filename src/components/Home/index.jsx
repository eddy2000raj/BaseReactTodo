import { useEffect, useMemo, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Form } from '../Form'
import { AddUserForm } from '../AddUserForm'
import { Input } from "../Input"
import { Tasks } from '../Tasks'
import { FaPlus } from 'react-icons/fa'
import axios from 'axios';
import {Link} from "react-router-dom";

import styles from '../../styles/app.module.css';

const LOCALSTORAGE_TASKS_KEY = 'todolist-tasks'

import { toggleTodo,deleteTodo } from '../../redux/actions';
import { Lists } from "../Lists"

export function Home() {
  //const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTaskName, setSearchTaskName] = useState('')
  const [list,setList]= useState([]);

  let {tasks} = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onRemoveTask = (taskId) => {
    dispatch(deleteTodo(taskId));
  }

  useEffect(() => {
    if(!isLoading) {
      localStorage.setItem(LOCALSTORAGE_TASKS_KEY, JSON.stringify(tasks))
    }
  }, [tasks])

  useEffect(() => {
    axios.get('https://reqres.in/api/users').then((res)=>{
      setList(res.data.data);
    });
    
  }, [])


  useEffect(() => {
    const tasksLocal = localStorage.getItem(LOCALSTORAGE_TASKS_KEY)
    //tasksLocal && setTasks(JSON.parse(tasksLocal))
    setIsLoading(false)
  }, [])

  const handleTermSearch = (e) => {
    const valueTerm = e.target.value.toLocaleLowerCase()
    setSearchTaskName(valueTerm)
  }

  const totalTasks = tasks.length;


  const totalCompletedTasks = tasks.filter(task => task.completed).length; 


  const clearForm= () => {
    setSearchTaskName('')
  }

  const onChangeCompleted = (taskId) => {
    
    const taskIndex = tasks.findIndex(task => task.id === taskId)

    const updatedTask = [...tasks]
    updatedTask[taskIndex].completed = !updatedTask[taskIndex].completed
    dispatch(toggleTodo(taskId,updatedTask));
    
  }

  return (
    <div>
      <div className={styles.container}>
      <div className={styles.content}>
        <h1>TODOLIST</h1>
        <Form onSubmit={clearForm} />

        <hr />

        <Input
          type="text"
          value={searchTaskName}
          onChange={handleTermSearch}
          placeholder="Search for a task"
        />

        <Tasks
          tasks={tasks}
          searchTaskName={searchTaskName}
          onRemoveTask={onRemoveTask}
          onChangeCompletedTask={onChangeCompleted}
        />

        <footer className={styles.footer}>
          <h6>
            Total task:
            <span>{totalTasks}</span>
          </h6>

          <h6>
            Total task completed:
            <span>{totalCompletedTasks}</span>
          </h6>
        </footer>
      </div>

    </div>
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>API CRUD Operation</h1>
        <Link to="/addUser">
        AddUser
        </Link>
        <hr />

        <Lists
          list={list}
          searchTaskName={searchTaskName}
          onRemoveTask={onRemoveTask}
        />
      </div>

    </div>
    </div>
    
  )
}