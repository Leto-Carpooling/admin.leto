import React from "react";
const TextInput = ({ label, placeholder, type }) => {
    return (
        <div className="flex flex-col p-2">
            <span className="text-sm font-semibold text-gray-700 mb-2">
                {label}
            </span>
            <input
                type={type}
                className="bg-gray-200 px-4 py-3 rounded focus:outline-none"
                placeHolder={placeholder}
            />
        </div>
    );
};

export default TextInput;
