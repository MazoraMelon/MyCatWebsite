import React from "react";

export default function Button({ onClick, children, style }) {
    return (
        <button
            onClick={onClick}
            style={{
                ...style,
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "10px",
                marginTop: "20px",
                border: "1px solid orange",
                cursor: "pointer",
                backgroundColor: "var(--backgroundglass)",
                color: "white",
                transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "orange";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "var(--backgroundglass)";
            }}
        >
            {children}
        </button>
    );
}