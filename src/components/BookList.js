import {Book} from "./Book.jsx";
import books from "../books.json";

export function BookList() {
    
    console.log(books);

    return (
       <>
        {books.map(book => {
            return <Book key={book.isbn} title={book.title} author={book.author} url={book.website} description={book.description} />
        })}
        </> 
    )
    
}