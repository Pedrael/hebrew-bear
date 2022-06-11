//import classes from './Words.module.css';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {addVerbAction} from '../../store/index.js';

import Button from "../../components/button/Button.jsx";
import Input from "../../components/input/Input.jsx";

const Words = () => {

  const dispatch = useDispatch();
  const binyanim = useSelector(state => state.binyanim);
  const verbs = useSelector(state => state.verbs);

  return (
    <table className=''>
        <thead>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><button>Add</button></td>
        </tr>
        </tfoot>
    </table> 
  )
}

export default Words;