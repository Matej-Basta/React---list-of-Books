import {Checkbox} from "./Checkbox.jsx";
import React, {useState} from "react";

export function Book({title, author, url, description}) {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
        <p><a href={url}>{title}</a> by {author}</p>

        {showDetails &&
            <p>{description}</p>
        }

        <button onClick={ () => {setShowDetails(!showDetails); console.log(showDetails)}}>Show details</button>
        <br />
        <Checkbox />
        </>
    );
}