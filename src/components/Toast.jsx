import React from "react";
import { MdError } from "react-icons/md";
import { colors } from "../assets/colors/colors";

export const Toast = ({ theme, text, hidden }) => {
    return hidden ? null : (
        <div
            className={`flex flex-row justify-center p-3 rounded items-center ${returnTheme()}`}
        >
            <span className="text-white font-medium">{text}</span>
        </div>
    );

    function returnTheme() {
        switch (theme) {
            case "danger":
                return "bg-red-500";
            case "success":
                return "bg-green-500";
            case "warning":
                return "bg-yellow-500";
            default:
                return "bg-blue-500";
        }
    }
};
