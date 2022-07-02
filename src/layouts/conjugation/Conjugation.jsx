import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import classes from '../../styles/index.module.css';

import Word from '../../models/Words.js';
import { conjugatePresent, conjugatePast } from './ConjugateFunctions';

const Conjugation = () => {

    const word = new Word('פעל', 'work', 'Pa`al');
    
    const {tense, root, type} = useParams();
    const result = [];

    switch(tense) {
        case 'present':
            result.push(...conjugatePresent(root, type));
        break;
        case 'past':
            result.push(...conjugatePast(root, type));
        break;
        case 'future':
            result.push(...conjugatePast(root, type));
        break;
        default:
        break;
    }

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
                <td><Link to="/" className={classes.button}>Back</Link></td>
            </tr>
            </tfoot>
        </table> 
    ) 
}

export default Conjugation;