import React from "react";
import classes from "../../styles/index.module.css";

const Letter = ({letter, input, ...props}) => {

    const handleClick = () => {
        input.current.focus();
        input.current.value+=letter;
        console.log(input.current.value);
    }

    return (
        <div {...props} className={classes.letter} onClick={()=>handleClick()}>{letter}</div>
    )
}

export default Letter;