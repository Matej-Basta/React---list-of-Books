import React, {useState} from "react";

export function Checkbox() {
    const [read, setRead] = useState("x");

    const toggle = () => {
        if (read === "x") {
            setRead("v");
        } else {
            setRead("x");
        }
    }

    return (
        <button onClick={toggle}>{read}</button>
    );
}