import React, {useState} from 'react';
import classes from '../../styles/index.module.css';

const Input = (props) => {

  return (
      <input {...props} className={classes.input}/>
  )
}

export default Input;
