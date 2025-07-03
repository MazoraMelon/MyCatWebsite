import React from "react";

export default function Checkbox({ checked, onChange }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "40px",
            height: "40px",
            border: "2px solid #FFC300",
            borderRadius: "10px",
            backgroundColor: checked ? "rgba(223,157,80,0.25)" : "rgba(223,157,80,0.25)",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            userSelect: "none",
            alignSelf: "center",
        }}

            onClick={onChange}
        >
            {checked ? "✅" : ""}
        </div>
    );
}