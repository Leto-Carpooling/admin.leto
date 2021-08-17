import React from "react";
import { MdError } from "react-icons/md";
import { colors } from "../assets/colors/colors";

export const Toast = ({ theme, text, hidden }) => {
    return hidden ? null : (
        <div className="p-2">
            <div className="bg-red-500 flex flex-row my-4 p-3 rounded items-center">
                <span className="text-white font-medium">{text}</span>
            </div>
        </div>
    );
};
