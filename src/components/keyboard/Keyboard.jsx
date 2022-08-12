import React from "react";
import classes from "../../styles/index.module.css";

import { letters } from "../../layouts/conjugation/alphabet";
import Letter from "./Letter";

const Keyboard = ({input, ...props}) => {

    const lettersArray = Object.values(letters);

    const coords = {
        left: 300,
        top: 300,
        last_left: 300,
        last_top: 300
      }

    const p =  {
        pos1: 0,
        pos2: 0,
        pos3: 0,
        pos4: 0
      }

    const coordsCSS = {
        left: coords.left,
        top: coords.top
    }

    let mousedown = false;

    const mouseDown = (e) => {
        mousedown = true;
        console.clear();
        p.pos3 = e.clientX;
        p.pos4 = e.clientY;
    }

    const mouseUp = (e) => {
        mousedown = false;
    }

    const elementDrag = (e) => {
        if(mousedown) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          p.pos1 = p.pos3 - e.clientX;
          p.pos2 = p.pos4 - e.clientY;
          p.pos3 = e.clientX;
          p.pos4 = e.clientY;
          // set the element's new position:
          coords.top = (coords.top - p.pos2);
          coords.left = (coords.left - p.pos1);
          coords.last_top = coords.top;
          coords.last_left = coords.left;
          e.currentTarget.style.setProperty('top', coords.top);
          e.currentTarget.style.setProperty('left', coords.left);
          console.log(e.currentTarget);
        }
      }

    return (
        <div className={classes.keyboard}
        /* onMouseDown={(e)=>mouseDown(e)} 
        onMouseUp={(e)=>mouseUp(e)} 
        onMouseMove={(e)=>elementDrag(e)} */ >
            {
                lettersArray.map((l, index) => (
                    <Letter letter={l} input={input}/>
                ))
            }
        </div>
    )
}

export default Keyboard;