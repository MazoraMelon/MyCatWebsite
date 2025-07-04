import React from "react";


export default function Checkbox({ checked, onChange, isChecking }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "45px",
            height: "45px",
            border: "2px solid #FFC300",
            borderRadius: "15px",
            aspectRatio: "1 / 1",
            backgroundColor: checked ? "rgba(223,157,80,0.25)" : "rgba(223,157,80,0.25)",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            userSelect: "none",
            alignSelf: "center",
        }}

            onClick={onChange}
        >
            {checked ? "✅" : ""}
            {isChecking ?
                <div className="spinner" style={{
                    width: "20px",
                    height: "20px",
                    border: "3px solid #FFC300",
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite"
                }}></div>
             : <></>}
        </div>
    );
}

