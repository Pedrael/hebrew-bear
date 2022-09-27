import React from "react";
import classes from "../../styles/index.module.css";

import { letters } from "../../layouts/conjugation/alphabet";
import Letter from "./Letter";

const Keyboard = ({input, ...props}) => {

    const lettersArray = Object.values(letters);

    return (
        <div className={classes.keyboard}>
            {
                lettersArray.map((l, index) => (
                    <Letter letter={l} input={input} key={index}/>
                ))
            }
        </div>
    )
}

export default Keyboard;