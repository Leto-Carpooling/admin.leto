import React from "react";

const SmallButton = ({ text, icon, theme, styles }) => {
    return (
        <button
            className={
                "flex flex-row justify-center gap-2 items-center px-4 py-2 m-1 text-sm font-medium text-white rounded-sm shadow " +
                setTheme(theme) +
                " " +
                styles
            }
        >
            <span className="mx-auto flex-grow">{text}</span>
            <span className="flex self-end justify-center items-center">
                {icon}
            </span>
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

export default SmallButton;
