import React from "react";
const Button = ({ text, icon, theme, styles }) => {
    return (
        <button
            className={
                "flex flex-row justify-center items-center px-5 py-3 m-2 text-white rounded-sm shadow-xl " +
                setTheme(theme) +
                " " +
                styles
            }
        >
            <span className="mx-auto flex-grow">{text}</span>
            <span className="flex self-end ml-auto">{icon}</span>
        </button>
    );
};

function setTheme(theme) {
    switch (theme) {
        case "danger":
            return "bg-danger hover:bg-red-500 active:bg-red-300";
        default:
            return "bg-primary hover:bg-blue-500 active:bg-blue-300";
    }
}

export default Button;
