import { useState ,forwardRef} from 'react'
import React from 'react';
import { v4 as uuid } from 'uuid'
import { FaPlus } from 'react-icons/fa'

import { Input } from '../Input'
import styles from './index.module.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import parentstyle from '../../styles/app.module.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export function AddUserForm() {
  
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const vertical= 'top';
  const horizontal = 'center';

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.name.value);
    console.log(event.target.email.value);
    const data= {
      "name": event.target.name.value,
      "job": "leader"
    }

    axios.post('https://reqres.in/api/users',data).then((res)=>{
      setOpen(true);
      setTimeout(()=>{
        navigate('/');
      },2000);
    });
    
  }


  return (
    <div className={parentstyle.container}>
    <div className={parentstyle.content}>
      <h1>Add User</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        name='name'
        placeholder="Name"
      />
      <Input
        type="text"
        name='email'
        placeholder="Email"
      />
      
      <button
        type="submit"
        className={styles.form__button}>
        <FaPlus size={12} />
        Add
      </button>
    </form>
    <Snackbar anchorOrigin={{ vertical,horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          User added Successfully!
        </Alert>
      </Snackbar>
    </div>
    </div>
    
  )
}