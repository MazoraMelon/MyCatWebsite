import React from "react";
import Button from "../Button.jsx";

export default function BlobCage({onSolve}) {


    const evilImageUrl = "src/assets/EvilBlob.png"

    function unCagBlob() {
        // This function is called when the button is clicked
        // It should contain the logic to "uncage" the blob
        console.log("Blob uncaged!");

        const blobImage = document.getElementById("blob");
        blobImage.src = evilImageUrl;

        const fireImageUrl = "src/assets/Fire.png"

        // Place fire all over hte page
        const fireCount = 100; // Number of fire images to place
        for (let i = 0; i < fireCount; i++) {
            setTimeout(() => {
                const fireImage = document.createElement("img");
                fireImage.src = fireImageUrl;
                fireImage.className = "fire";
                fireImage.style.left = `${Math.random() * window.innerWidth}px`;
                fireImage.style.top = `${Math.random() * window.innerHeight}px`;
                document.body.appendChild(fireImage);
            }, i * 30); // 30ms delay between each image
        }
        setTimeout(onSolve(), 2000)
    }


    return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        gap: "0px",
    }}>
        <h1>Set me free</h1>
        <img style={{
            width: "auto",
            height: "150px",
            imageRendering: "pixelated",
        }} alt={"Not an evil blob"} src={"src/assets/Blob.png"} id={"blob"}></img>
        <Button onClick={unCagBlob}>Set free</Button>
    </div>
}