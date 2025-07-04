import React from "react";

import Button from "./Button.jsx";

export default function ImageButton({imageSrc, onClick, altText = "Button"}) {
    return (
        <Button onClick={onClick} style={{padding: "0", border: "none", background: "none"}}
                text={altText} >
            <img
                src={imageSrc}
                alt={altText}
                style={{
                    width: "250px",
                    height: "250px",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    borderRadius: "5px",
                }}
            />
        </Button>
    );

}