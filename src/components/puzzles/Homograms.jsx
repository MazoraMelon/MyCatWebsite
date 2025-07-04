import React from "react";

import ImageButton from "../ImageButton.jsx";

export default function Homograms({onSolve}) {
    return (
        <div id={"homogramsPuzzle"} className={"puzzle"}>
            <h2>Which of these is a cat?</h2>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "auto",
            }} id={"homogramsPuzzleContent"} className={"puzzle-content"}>
                <ImageButton onClick={onSolve}
                             imageSrc={"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D"}
                             altText={"Dog"}/>
                <ImageButton onClick={() => alert("Wrong! Orange cats aren't real!")}
                             imageSrc={"https://images.litter-robot.com/media/wysiwyg/orange-tabby-mackerel.jpeg"}
                             altText={"Cat"}/>
            </div>
        </div>
    );
}