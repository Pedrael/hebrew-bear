import React, {useState, useEffect} from "react";
import classes from "../../styles/index.module.css";

const Filter = ({handleFilter}) => {

    const [filter, setFilter] = useState('');

    useEffect(() => {
        handleFilter(filter);
    }, [filter]);

    return (
        <input type="text" className={classes.filterField} onChange={(e) => setFilter(e.target.value)}/>
    )
}

export default Filter;