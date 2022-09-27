//import classes from './Words.module.css';

import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

import classes from '../../styles/index.module.css';

import Word from '../../models/Words.js';
import {addVerbAction, removeVerbAction, setVerbsAction} from '../../store/index.js';
import { sendAsync } from "../../store/dbmanager";

import Button from "../../components/button/Button.jsx";
import Input from "../../components/input/Input.jsx";
import Filter from '../../components/filter/Filter';
import Keyboard from '../../components/keyboard/Keyboard';

const Words = () => {

  const dispatch = useDispatch();
  const verbs = useSelector(state => state.verbs);
  const types = useSelector(state => state.types);
  const title = useSelector(state => state.title);

  const [wordToAdd, setWord] = useState(new Word('', '', types[0]));
  const [filter, setFilter] = useState('');
  const [isKeyboard, toggleKeyboard] = useState(false);
  const hebword = useRef(null);

  const addWord = () => {
      //dispatch(addVerbAction(wordToAdd));
      const checkResult = checkInputs();
      if(checkResult.error) alert(checkResult.error);
      else {
          alert(checkResult.ok);
          sendAsync(`INSERT INTO words (root, translate, type) VALUES ('${wordToAdd.root}', '${wordToAdd.translate}', '${wordToAdd.type}')`);
      }
        }

  const removeWord = (wordToRemove) => {
      //dispatch(removeVerbAction(wordToRemove));
      sendAsync(`DELETE FROM words WHERE id = ${wordToRemove}`);
  }

  const setWords = (array) => { // setting words from DB to store
    dispatch(setVerbsAction(array));
  }

  const handleFilter = (value) => { // rerender on filter change
      setFilter(value);
  }

  const getFromDB = () => { // get form database
    sendAsync("SELECT * FROM words").then((result) => setWords(result));
  }

  const filterRow = (word) => { // show words that suit to filter
      if(filter === 'undefined' || filter === '') return true;
      return word.includes(filter);
  }

  const checkInputs = () => { //validate inputs before adding word 
      wordToAdd.root = hebword.current.value;
      if(wordToAdd.root.length === 0) return {error: "Root field cannot be empty!"}
      if(wordToAdd.root.length < 3 && wordToAdd.type != 'Noun') return {error: "Minimum 3 root letters required"}
      if(wordToAdd.translate.length === 0) return {error: "Translate field cannot be empty!"}
      return {ok: "Word added!"}
  }

  useEffect(() => {
    getFromDB(); // getting from database on startup
  }, []);

  return (
    <>
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
                    <td className={classes.hebrew}>{row.root}</td>
                    <td>{row.translate}</td>
                    <td>{row.type}</td>
                    <td>
                        {row.type != 'noun' ? <Link className={classes.button} to={`/conjugation/present/${row.root}/${row.translate}/${row.type}`}>Present</Link> : <></>}
                    </td>
                    <td>
                        {row.type != 'noun' ? <Link className={classes.button} to={`/conjugation/past/${row.root}/${row.translate}/${row.type}`}>Past</Link> : <></>}
                    </td>
                    <td>
                        {row.type != 'noun' ? <Link className={classes.button} to={`/conjugation/future/${row.root}/${row.translate}/${row.type}`}>Future</Link> : <></>}
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
            <td><Input 
                type="text"
                lang="he" 
                dir="rtl"
                ref={hebword}
                onChange = {(e) => setWord(new Word(e.target.value, wordToAdd.translate, wordToAdd.type))}/>
            </td>
            <td><Input 
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
            <td><button className={classes.button} onClick={()=>toggleKeyboard(!isKeyboard)}>Keyboard</button></td>
            <td><button className={classes.button} onClick={()=>addWord()}>Add</button></td>
            <td></td>
            <td></td>
        </tr>
        </tfoot>
    </table> 
    {isKeyboard ? <Keyboard input={hebword}></Keyboard> : <></>}
    </>
  )
}

export default Words;