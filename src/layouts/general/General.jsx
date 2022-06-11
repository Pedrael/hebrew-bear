import classes from './General.module.css';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link, Route, Routes } from "react-router-dom";

import {addVerbAction} from '../../store/index.js';

import Button from "../../components/button/Button.jsx";
import Input from "../../components/input/Input.jsx";

const General = () => {

  const dispatch = useDispatch();
  const binyanim = useSelector(state => state.binyanim);
  const verbs = useSelector(state => state.verbs);

  return (
    <div className={classes.layout}>
      <aside className={classes.aside}>
        <Link to="/verbs" className={classes.asideButton}>Verbs</Link>
        <Link to="/nouns" className={classes.asideButton}>Nouns</Link>
      </aside>
      <main>
      <Routes>
        <Route path="verbs" element={<p>Verbs</p>} />
        <Route path="nouns" element={<p>Nouns</p>} />
      </Routes>
      </main>
    </div>
  )
}

export default General;
