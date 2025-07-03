import React, { useState } from "react";
import Checkbox from "./Checkbox.jsx";
import FullName from "./BasicPuzzle.jsx";

export default function Captcha() {
    // Declare state variable for checked status
    const [isChecked, setIsChecked] = useState(false);
    const [isChecking, setIsChecking] = useState(false);

    // Handle checkbox change event
    const onChange = () => {
        // setIsChecked(prev => !prev); // Toggle the checked state
        setIsChecking(true);
    };

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
                <p className={"catIcon"}>😺</p>
            </div>

            <div id={"captcha-content"}>
                <FullName />
            </div>

        </div>
    );
}
