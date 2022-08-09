import React from "react";
import classes from "../../styles/index.module.css";

const Letter = ({letter}) => {

    const handleClick = () => {
        console.log(letter);
    }

    return (
        <div className={classes.letter} onClick={() => handleClick()}>{letter}</div>
    )
}

export default Letter;