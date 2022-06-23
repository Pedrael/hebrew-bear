//import classes from './Words.module.css';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import classes from './Words.module.css';

import Word from '../../models/Words.js';
import {addVerbAction} from '../../store/index.js';

import Button from "../../components/button/Button.jsx";
import Input from "../../components/input/Input.jsx";

const Words = () => {

  const dispatch = useDispatch();
  const verbs = useSelector(state => state.verbs);
  const types = useSelector(state => state.types);
  const title = useSelector(state => state.title);

  const [wordToAdd, setWord] = useState(new Word('', '', types[0]));

  const addWord = () => {
      dispatch(addVerbAction(wordToAdd));
  }

  return (
    <table className={classes.table}>
        <thead>
        <tr>
            {
                title.map((item, key) => (
                    <th key={key}>{item}</th>
                ))
            }
        </tr>
        </thead>
        <tbody>
        {
            verbs.map((row, key) => (
                <tr key={key}>
                    <td>{row.root}</td>
                    <td>{row.translate}</td>
                    <td>{row.type}</td>
                    <td>
                        {row.type != 'noun' ? <button>Present</button> : <></>}
                    </td>
                    <td>
                        {row.type != 'noun' ? <button>Past</button> : <></>}
                    </td>
                    <td>
                        {row.type != 'noun' ? <button>Future</button> : <></>}
                    </td>
                </tr>
            ))
        }
        </tbody>
        <tfoot>
        <tr>
            <td><input 
                type="text" 
                onChange = {(e) => setWord(new Word(e.target.value, wordToAdd.translate, wordToAdd.type))}/>
            </td>
            <td><input 
                type="text" 
                onChange = {(e) => setWord(new Word(wordToAdd.root, e.target.value, wordToAdd.type))}/>
            </td>
            <td>
                <select 
                name="types" 
                onChange = {(e) => setWord(new Word(wordToAdd.root, wordToAdd.translate, e.target.value))}>
                    {types.map((type, key) => (
                        <option value={type} key={key}>{type}</option>
                    ))}
                </select>
            </td>
            <td></td>
            <td><button onClick={()=>addWord()}>Add</button></td>
            <td></td>
        </tr>
        </tfoot>
    </table> 
  )
}

export default Words;