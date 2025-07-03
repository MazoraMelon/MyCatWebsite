import React from "react";

import Button from "./Button.jsx";

export default function FullName({ onSolve }) {

    return (
        <div id={"fullNamePuzzle"} className={"puzzle"}>
            <h2>What is your full name?</h2>
            <input
                type="text"
                onChange={(e) => {
                    if (e.target.value.trim().length > 0) {
                        onSolve();
                    }
                }}
                style={{
                    width: "90%",
                    backgroundColor: "var(--backgroundglass)",
                    color: "white",
                    placeholderColor: "rgba(255, 255, 255, 0.5)",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    outline: "none",
                    border: "1px solid #ccc",
                }}
            />
            <Button onClick={() => console.log("Hey")}>Submit</Button>
        </div>
    );
}