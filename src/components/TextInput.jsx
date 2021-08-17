import React from "react";
const TextInput = ({ label, ...props }) => {
    return (
        <div className="flex flex-col p-2">
            <span className="text-sm font-semibold text-gray-700 mb-2">
                {label}
            </span>
            <input
                className="bg-gray-200 px-4 py-3 rounded focus:outline-none"
                {...props}
            />
        </div>
    );
};

export default TextInput;
