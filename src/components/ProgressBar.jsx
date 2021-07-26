import React, { useState, useEffect } from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(30);

    useEffect(() => {
        setInterval(
            () => setProgress(Math.floor(Math.random() * 100) + 1),
            2000
        );
    }, []);

    // Styles
    const progressStyle = {
        width: `${progress}%`,
        transition: "width 1s ease-in-out",
    };

    return (
        <div className="bg-gray-300 h-3 rounded-sm">
            <div
                className="bg-primary h-full rounded-sm"
                style={progressStyle}
            ></div>
        </div>
    );
};

export default ProgressBar;
