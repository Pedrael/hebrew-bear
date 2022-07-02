import classes from './General.module.css';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link, Route, Routes } from "react-router-dom";

import Words from "../words/Words.jsx";
import Conjugation from '../conjugation/Conjugation';

const General = () => {

  const dispatch = useDispatch();
  const binyanim = useSelector(state => state.binyanim);

  return (
    <div className={classes.generalLayout}>
      <Routes>
        <Route path="" element={<Words></Words>} />
        <Route path="conjugation/:tense/:root/:type" element={<Conjugation></Conjugation>} />
        <Route path="*" element={<Words></Words>} />
      </Routes>
    </div>
  )
}

export default General;
