import {Book} from "./Book.jsx";
import books from "../books.json";
import React, {useState} from "react";

export function BookList() {
    
    const [readBooks, setReadBooks] = useState([]);

    console.log(readBooks);

    return (
       <>
        {books.map(book => {
            return <Book key={book.isbn} title={book.title} author={book.author} url={book.website} description={book.description} readBooks={readBooks} setReadBooks={setReadBooks}/>
        })}
        </> 
    )
    
}