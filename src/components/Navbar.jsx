import React from "react";
import NavItem from "./NavItem";
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
            <div className="flex flex-row flex-grow items-center">
                <NavItem label="Drivers" active={true} />
                <NavItem label="Approve Admins" />
            </div>
            <div className="flex flex-row-reverse flex-grow">
                <UserBar />
            </div>
        </div>
    );
};

export default Navbar;
