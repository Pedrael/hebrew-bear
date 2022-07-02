import React, {useState, useEffect} from "react";

const Filter = ({handleFilter}) => {

    const [filter, setFilter] = useState('');

    useEffect(() => {
        handleFilter(filter);
    }, [filter]);

    return (
        <input type="text" onChange={(e) => setFilter(e.target.value)}/>
    )
}

export default Filter;