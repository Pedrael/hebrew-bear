import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import classes from '../../styles/index.module.css';

import Word from '../../models/Words.js';
import { createInfinitive, conjugatePresent, conjugatePast, conjugateFuture } from './ConjugateFunctions';
import { normaliseWord } from './alphabet';

const Conjugation = () => {
    
    const {tense, root, translate, type} = useParams();
    const result = [];
    const signature = [];
    const infinitive = normaliseWord(createInfinitive(root, type).inf);

    switch(tense) {
        case 'present':
            Object.values(conjugatePresent(root, type)).forEach(word => {
                result.push(normaliseWord(word));
            });
            signature.push(...Object.keys(conjugatePresent(root, type)));
        break;
        case 'past':
            Object.values(conjugatePast(root, type)).forEach(word => {
                result.push(normaliseWord(word));
            });
            signature.push(...Object.keys(conjugatePast(root, type)));
        break;
        case 'future':
            Object.values(conjugateFuture(root, type)).forEach(word => {
                result.push(normaliseWord(word));
            });
            signature.push(...Object.keys(conjugateFuture(root, type)));
        break;
        default:
        break;
    }

    return (
        <table className={classes.table + ' ' + classes.big}>
            <thead>
            <tr>
                <th className={classes.hebrew}>{root}</th>
                <th><span  className={classes.hebrew}>{infinitive}</span> - {translate}</th>
            </tr>
            </thead>
            <tbody>
            {
                signature.map((sign, key) => (
                    <tr key={key}><td>{sign}</td><td className={classes.hebrew}>{result[key]}</td></tr>
                ))
            }
            </tbody>
            <tfoot>
            <tr>
                <td></td>
                <td><Link to="/" className={classes.button}>Back</Link></td>
            </tr>
            </tfoot>
        </table> 
    ) 
}

export default Conjugation;