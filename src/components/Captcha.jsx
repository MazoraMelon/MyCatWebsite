import React, { useState } from "react";
import Checkbox from "./Checkbox.jsx";
import FullName from "./puzzles/Fullname.jsx";
import AreYouHuman from "./puzzles/AreYouHuman.jsx";
import Homograms from "./puzzles/Homograms.jsx";
import BlobCage from "./puzzles/BlobCage.jsx";
import ScrollSphere from "./puzzles/ScrollSphere.jsx";
import Password from "./puzzles/Password.jsx";
import Trust from "./puzzles/Trust.jsx";

export default function Captcha({ forwardLink }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);

    // List of puzzles to show in order
    const puzzleList = [
        AreYouHuman,
        Trust,
        FullName,
        Homograms,
        Password,
        ScrollSphere,
        BlobCage,
    ];

    const onChange = () => {
        if (isChecked) {
            setIsChecked(false);
            setIsChecking(false);
            setCurrentPuzzleIndex(0);
            return;
        }
        setTimeout(() => setIsChecking(true), 200);
    };

    const solvePuzzle = () => {
        if (currentPuzzleIndex < puzzleList.length - 1) {
            setCurrentPuzzleIndex(currentPuzzleIndex + 1);
        } else {
            // Last puzzle solved
            setIsChecked(true);
            setIsChecking(false);
            console.log("All puzzles solved!");
            setTimeout(() => {
                if (forwardLink) {
                    window.location.href = forwardLink;
                }
            }, 2000);
        }
    };

    const CurrentPuzzle = puzzleList[currentPuzzleIndex];

    return (
        <div className="captcha-container">
            <div id="captcha">
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                }}>
                    <Checkbox checked={isChecked} onChange={onChange} isChecking={isChecking} />
                    <h2 className={"notARobot"}>I am not a robot</h2>
                </div>
            </div>

            {isChecking && (
                <div id={"captcha-content"}>
                    <CurrentPuzzle onSolve={solvePuzzle} />
                    <p style={{ textAlign: "center", marginTop: "10px" }}>
                        Puzzle {currentPuzzleIndex + 1} of {puzzleList.length}
                    </p>
                </div>
            )}
        </div>
    );
}
