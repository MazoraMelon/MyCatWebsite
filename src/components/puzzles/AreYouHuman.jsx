import React from "react";

import Button from "../Button.jsx";

export default function AreYouHuman({ onSolve }) {

    return (
        <div>
            <h2>Are you human?</h2>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
            }} id={"areYouHumanPuzzleContent"} className={"puzzle-content"}>
                <Button onClick={() => alert("Wrong answer")}>No</Button>
                <Button onClick={onSolve}>Yes</Button>
            </div>
        </div>
    );

}