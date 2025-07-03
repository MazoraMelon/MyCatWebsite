import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


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
            {isChecking ? <DotLottieReact
                src="https://lottie.host/42e0ba57-be24-431d-8252-37cfa99bc57a/rNqt5n3aa7.lottie"
                loop
                autoplay
            /> : <></>}
        </div>
    );
}

