//import classes from './Words.module.css';

import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

import classes from '../../styles/index.module.css';

import Word from '../../models/Words.js';
import {addVerbAction, removeVerbAction, setVerbsAction} from '../../store/index.js';
import { sendAsync } from "../../store/dbmanager";

import Button from "../../components/button/Button.jsx";
import Input from "../../components/input/Input.jsx";
import Filter from '../../components/filter/Filter';

const Words = () => {

  const dispatch = useDispatch();
  const verbs = useSelector(state => state.verbs);
  const types = useSelector(state => state.types);
  const title = useSelector(state => state.title);

  const [wordToAdd, setWord] = useState(new Word('', '', types[0]));
  const [filter, setFilter] = useState('');

  const addWord = () => {
      //dispatch(addVerbAction(wordToAdd));
      sendAsync(`INSERT INTO words (root, translate, type) VALUES ('${wordToAdd.root}', '${wordToAdd.translate}', '${wordToAdd.type}')`);
  }

  const removeWord = (wordToRemove) => {
      //dispatch(removeVerbAction(wordToRemove));
      sendAsync(`DELETE FROM words WHERE id = ${wordToRemove}`);
  }

  const setWords = (array) => {
    dispatch(setVerbsAction(array));
  }

  const handleFilter = (value) => {
      setFilter(value);
  }

  const getFromDB = () => {
    sendAsync("SELECT * FROM words").then((result) => setWords(result));
  }

  const filterRow = (word) => {
      if(filter === 'undefined' || filter === '') return true;
      return word.includes(filter);
  }

  useEffect(() => {
      getFromDB();
  }, []);

  return (
    <table className={classes.table}>
        <thead>
        <tr>
            {
                title.map((item, key) => (
                    <th key={key}>{item}</th>
                ))
            }
            <th><Filter handleFilter={handleFilter}></Filter></th>
        </tr>
        </thead>
        <tbody>
        {
            verbs.map((row, key) => (
                filterRow(row.translate)?
                <tr key={key}>
                    <td>{row.root}</td>
                    <td>{row.translate}</td>
                    <td>{row.type}</td>
                    <td>
                        {row.type != 'noun' ? <Link className={classes.button} to={`/conjugation/present/${row.root}/${row.type}`}>Present</Link> : <></>}
                    </td>
                    <td>
                        {row.type != 'noun' ? <Link className={classes.button} to={`/conjugation/past/${row.root}/${row.type}`}>Past</Link> : <></>}
                    </td>
                    <td>
                        {row.type != 'noun' ? <Link className={classes.button} to={`/conjugation/future/${row.root}/${row.type}`}>Future</Link> : <></>}
                    </td>
                    <td>
                        <button className={classes.button} onClick={()=>removeWord(row.id)}>Remove</button>
                    </td>
                </tr>
                :<></>
                
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
            <td><button className={classes.button} onClick={()=>addWord()}>Add</button></td>
            <td></td>
            <td></td>
        </tr>
        </tfoot>
    </table> 
  )
}

export default Words;