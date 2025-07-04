import React from "react";

import Button from "../Button.jsx";

export default function Trust({ onSolve }) {

    return (
        <div>
            <h1>Do you trust me?</h1>
           <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "20px"
              }}>
               <Button onClick={() => alert("Tough")}>No</Button>
               <Button onClick={onSolve}>Yes</Button>
           </div>

        </div>
    );
}