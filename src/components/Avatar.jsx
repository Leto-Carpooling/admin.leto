import React from "react";

const Avatar = ({ src, size }) => {
    return (
        <div
            className={
                "rounded-full overflow-hidden object-cover " +
                `w-${size} h-${size}`
            }
        >
            <img
                src="https://picsum.photos/200/300"
                alt="avatar"
                className=""
            />
        </div>
    );
};

export default Avatar;
