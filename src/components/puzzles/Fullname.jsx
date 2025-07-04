import React from "react";

import Button from "../Button.jsx";

export default function FullName({ onSolve }) {

    return (
        <div>
            <h2>What is your full name?</h2>
            <input
                type="text"
            />
            <Button onClick={onSolve}>Submit</Button>
        </div>
    );
}