import React from "react";
import UserBar from "./UserBar";
const Navbar = () => {
    return (
        <div className="text-primary p-4 flex flex-row items-center gap-4 border-b">
            <div className="flex flex-col w-1/12 justify-center items-center">
                <span className="text-4xl font-serif">Leto.</span>
                {/* <span className="text-xs font-semibold self-end mr-2">
                    Admin
                </span> */}
            </div>

            {/* Nav items */}
            <div className="flex flex-row flex-grow">
                <div className="flex flex-col ml-10 justify-center items-center">
                    <span className="text-sm font-medium mb-1">Drivers</span>
                    <span className="w-6 h-1 bg-primary rounded-full"></span>
                </div>
            </div>
            <div className="flex flex-row-reverse flex-grow">
                <UserBar />
            </div>
        </div>
    );
};

export default Navbar;
