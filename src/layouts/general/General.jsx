import classes from './General.module.css';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link, Route, Routes } from "react-router-dom";

import Words from "../words/Words.jsx";

const General = () => {

  const dispatch = useDispatch();
  const binyanim = useSelector(state => state.binyanim);

  return (
    <div className={classes.generalLayout}>
      {/* <aside className={classes.aside}>
        <Link to="/verbs" className={classes.asideButton}>Verbs</Link>
        <Link to="/verbs/paal" className={classes.asideButton}>Pa`al</Link>
        <Link to="/nouns" className={classes.asideButton}>Nouns</Link>
      </aside>
      <main>
      <Routes>
        <Route path="verbs" element={<Words></Words>} />
        <Route path="verbs/paal" element={<p>Pa`al</p>} />
        <Route path="nouns" element={<p>Nouns</p>} />
      </Routes>
      </main> */}
      <Words></Words>
    </div>
  )
}

export default General;
