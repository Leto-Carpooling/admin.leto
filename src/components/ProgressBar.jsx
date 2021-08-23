import React, { useState, useEffect } from "react";

const ProgressBar = ({ progress, max }) => {
    // Styles
    const progressStyle = {
        width: `${Math.floor((progress * 100) / max)}%`,
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
