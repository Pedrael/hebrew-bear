import React, {useState} from 'react';
import classes from './Input.module.css';

const Input = (props) => {

  return (
    <label className={classes.customInput}>
      {props.name} <input {...props} />
    </label>
  )
}

export default Input;
