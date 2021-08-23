import React from "react";

const NavItem = ({ label, active }) => {
    return (
        <div
            className={`flex flex-col ml-10 justify-center items-center cursor-pointer hover:text-primary ${
                active ? "text-primary" : "text-gray-500"
            }`}
        >
            <span className="text-sm font-medium mb-1">{label}</span>
            <span
                className={`w-6 h-1 bg-primary rounded-full ${
                    active ? "visible" : "invisible"
                }`}
            ></span>
        </div>
    );
};

export default NavItem;
