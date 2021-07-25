import React from "react";
const Button = ({ text, icon }) => {
    return (
        <button className="flex flex-row justify-center hover:bg-blue-500 items-center px-5 py-3 bg-primary m-2 text-white rounded-sm shadow-xl active:bg-blue-300">
            <span className="mx-auto flex-grow">{text}</span>

            <span className="flex self-end ml-auto">{icon}</span>
        </button>
    );
};

export default Button;
