import React from "react";

import Button from "../Button.jsx";

export default function Password({ onSolve }) {

    const checkPassword = () => {
        const pb = document.getElementById("passwordBox")
        // Check user has entered something
        if (!pb || pb.value.trim() === "") {
            alert("Enter a password. I'm not stupid.");
            return;
        }
        onSolve();
    }

    return (
        <div>
            <h1>Give me your password</h1>
            <input id={"passwordBox"} placeholder={"Password"} type={"password"}/>
            <Button onClick={() => alert("You really think thats an option??? Trust me.")}>No</Button>
            <Button onClick={checkPassword}>Next</Button>
        </div>
    );

}