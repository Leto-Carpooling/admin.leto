import React from "react";
const Navbar = () => {
    return (
        <div className="text-white bg-primary px-4 py-2 flex flex-row items-center gap-4">
            <div className="flex flex-col w-1/12 justify-center items-center">
                <span className="text-5xl font-serif">Leto.</span>
                {/* <span className="text-xs font-semibold self-end mr-2">
                    Admin
                </span> */}
            </div>

            {/* Nav items */}
            <div className="flex flex-col ml-10 justify-center items-center">
                <span className="font-medium mb-1">Drivers</span>
                <span className="w-6 h-1 bg-white rounded-full"></span>
            </div>
        </div>
    );
};

export default Navbar;
