import {Checkbox} from "./Checkbox.jsx";

export function Book({title, author, url}) {
    return (
        <>
        <p><a href={url}>{title}</a> by {author}</p>
        <Checkbox />
        </>
    );
}