import React, {useState} from "react";

export function Checkbox({updateReadBooks}) {
    const [read, setRead] = useState("x");

    const toggle = () => {
        if (read === "x") {
            setRead("v");
        } else {
            setRead("x");
        }
    }

    return (
        <button onClick={() => {updateReadBooks(); toggle()}}>{read}</button>
    );
}