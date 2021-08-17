import React from "react";
import { MdChevronRight } from "react-icons/md";
import { colors } from "../assets/colors/colors";
const Button = ({ text, icon, theme, styles, onClick, loading }) => {
    return (
        <div
            onClick={onClick}
            className={
                "flex flex-row justify-center items-center px-5 py-3 m-2 text-white rounded shadow-xl " +
                setTheme(theme) +
                " " +
                styles
            }
        >
            <span className="flex-grow text-center font-medium text-sm">
                {text}
            </span>
            <span className="flex items-center justify-center">
                {renderLoaderOrIcon(loading, icon)}
            </span>
        </div>
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

function renderLoaderOrIcon(loading, icon) {
    return loading ? (
        <span className="animate-ping h-2 w-2 rounded-full bg-white"></span>
    ) : icon ? (
        icon
    ) : (
        <MdChevronRight size={24} color={colors.white} />
    );
}

export default Button;
