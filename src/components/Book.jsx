import {Checkbox} from "./Checkbox.jsx";
import React, {useState} from "react";

export function Book({title, author, url, description, readBooks, setReadBooks}) {

    const [showDetails, setShowDetails] = useState(false);

    const updateReadBooks = () => {
        if (readBooks.find(t => title === t)) {
            setReadBooks(readBooks.filter(t => title !== t));
        } else {
            setReadBooks([...readBooks, title]);
        }
    }

    return (
        <>
        <p><a href={url}>{title}</a> by {author}</p>

        {showDetails &&
            <p>{description}</p>
        }

        <button onClick={ () => {setShowDetails(!showDetails); console.log(showDetails)}}>Show details</button>
        <br />
        <Checkbox updateReadBooks={updateReadBooks}/>
        </>
    );
}