import React, {forwardRef} from 'react';
import classes from '../../styles/index.module.css';

const Input = (props, ref) => {

  return (
      <input {...props} ref={ref} className={classes.input}/>
  )
}

export default forwardRef(Input);
