import React from "react";

const Avatar = ({ src, size }) => {
    return (
        <div
            className={
                "rounded-full overflow-hidden object-cover " +
                `w-${size} h-${size}`
            }
        >
            <img src={src} alt="avatar" className={`w-${size} h-${size}`} />
        </div>
    );
};

export default Avatar;
