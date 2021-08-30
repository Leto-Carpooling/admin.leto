import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ label, to, currPath }) => {
    return (
        <Link to={to}>
            <div
                className={`flex flex-col ml-10 justify-center items-center cursor-pointer hover:text-primary ${
                    currPath === to ? "text-primary" : "text-gray-500"
                }`}
            >
                <span className="text-sm font-medium mb-1">{label}</span>
                <span
                    className={`w-6 h-1 bg-primary rounded-full ${
                        currPath === to ? "visible" : "invisible"
                    }`}
                ></span>
            </div>
        </Link>
    );
};

export default NavItem;
