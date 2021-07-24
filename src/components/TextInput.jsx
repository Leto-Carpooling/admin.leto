import React from "react";
const TextInput = ({ label, placeholder }) => {
    return (
        <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-700">{label}</span>
            <input
                type="text"
                className="bg-gray-300"
                placeHolder={placeholder}
            />
        </div>
    );
};

export default TextInput;
