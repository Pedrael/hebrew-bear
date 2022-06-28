import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import classes from '../../styles/index.module.css';

import Word from '../../models/Words.js';
import { conjugatePresent } from './ConjugateFunctions';

const Conjugation = () => {

    const word = new Word('פעל', 'work', 'Pa`al');
    
    const {tense, root, type} = useParams();
    const result = conjugatePresent(root, type);

    return (
        <table className={classes.table}>
            <thead>
            <tr>
                <th>{root}</th>
            </tr>
            </thead>
            <tbody>
            {
                result.map((word, key) => (
                    <tr key={key}><td>{word}</td></tr>
                ))
            }
            </tbody>
            <tfoot>
            <tr>
                <td><Link to="/">Back</Link></td>
            </tr>
            </tfoot>
        </table> 
    ) 
}

export default Conjugation;