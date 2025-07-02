import React from "react";

export default function Background() {
    return (
        <div
            className="background"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
                overflow: "hidden",
            }}
        >
            {/* Grainy Texture */}

            {/* SVG Background */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1623 1024"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <g clipPath="url(#clip0_23_2)">
                    <rect width="1623" height="1024" fill="#1F1F1F" />
                    <g filter="url(#filter0_f_23_2)">
                        <circle cx="778" cy="275" r="197" fill="#FF0037" />
                    </g>
                    <g filter="url(#filter1_f_23_2)">
                        <circle cx="1299" cy="447" r="197" fill="#FF7700" />
                    </g>
                    <g filter="url(#filter2_f_23_2)">
                        <circle cx="1426" cy="866" r="197" fill="#FF0000" />
                    </g>
                    <g filter="url(#filter3_f_23_2)">
                        <circle cx="195" cy="158" r="197" fill="#FFC400" />
                    </g>
                    <g filter="url(#filter4_f_23_2)">
                        <circle cx="418" cy="780" r="197" fill="#9900FF" />
                    </g>
                </g>
                <rect x="0.5" y="0.5" width="1622" height="1023" stroke="black" />
                <defs>
                    <filter
                        id="filter0_f_23_2"
                        x="-36.9"
                        y="-539.9"
                        width="1629.8"
                        height="1629.8"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="308.95"
                            result="effect1_foregroundBlur_23_2"
                        />
                    </filter>
                    <filter
                        id="filter1_f_23_2"
                        x="484.1"
                        y="-367.9"
                        width="1629.8"
                        height="1629.8"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="308.95"
                            result="effect1_foregroundBlur_23_2"
                        />
                    </filter>
                    <filter
                        id="filter2_f_23_2"
                        x="611.1"
                        y="51.1"
                        width="1629.8"
                        height="1629.8"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="308.95"
                            result="effect1_foregroundBlur_23_2"
                        />
                    </filter>
                    <filter
                        id="filter3_f_23_2"
                        x="-619.9"
                        y="-656.9"
                        width="1629.8"
                        height="1629.8"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="308.95"
                            result="effect1_foregroundBlur_23_2"
                        />
                    </filter>
                    <filter
                        id="filter4_f_23_2"
                        x="-396.9"
                        y="-34.9"
                        width="1629.8"
                        height="1629.8"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="308.95"
                            result="effect1_foregroundBlur_23_2"
                        />
                    </filter>
                    <clipPath id="clip0_23_2">
                        <rect width="1623" height="1024" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}
