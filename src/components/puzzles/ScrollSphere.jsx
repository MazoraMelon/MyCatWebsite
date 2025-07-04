import React, {useState, useEffect, useRef} from "react";

export default function ScrollSphere({onSolve}) {
    const [currentAngle, setCurrentAngle] = useState(0);
    const sphereRef = useRef(null);
    const solveAngle = 360;

    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault(); // Prevent page scrolling

            const delta = event.deltaY > 0 ? 10 : -10;
            setCurrentAngle((prevAngle) => {
                const nextAngle = prevAngle + delta;

                console.log(nextAngle);
                if (nextAngle >= solveAngle) {
                    onSolve();
                }

                return nextAngle;
            });
        };

        const sphere = sphereRef.current;

        if (sphere) {
            sphere.addEventListener("wheel", handleScroll);
        }

        return () => {
            if (sphere) {
                sphere.removeEventListener("wheel", handleScroll);
            }
        };
    }, [onSolve]);

    return (
        <div>
            <h1>Scroll 360 Degrees</h1>
            <div
                ref={sphereRef}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: "conic-gradient(from 0deg, orange, transparent)",
                    transform: `rotate(${currentAngle}deg)`,
                    transition: "0.2s ease-out",
                    margin: "40px auto",
                    overflow: "hidden",
                    border: "1px solid orange",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative", // Added for absolute positioning of the dot
                }}
            >
            </div>
            {currentAngle}
        </div>
    );
}
