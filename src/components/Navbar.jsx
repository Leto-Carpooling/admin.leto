import React from "react";
import NavItem from "./NavItem";
import UserBar from "./UserBar";
import { useLocation } from "react-router";
const Navbar = () => {
    const loc = useLocation();
    return (
        <div className="text-primary p-4 flex flex-row items-center gap-4 border-b">
            <div className="flex flex-col w-1/12 justify-center items-center">
                <span className="text-4xl font-serif">Leto.</span>
            </div>

            {/* Nav items */}
            <div className="flex flex-row flex-grow items-center">
                <NavItem label="Drivers" to="/" currPath={loc.pathname} />
                <NavItem
                    label="Approve Admins"
                    to="/approveadmins"
                    currPath={loc.pathname}
                />
                <NavItem
                    label="Simulator"
                    to="/simulator"
                    currPath={loc.pathname}
                />
            </div>
            <div className="flex flex-row-reverse flex-grow">
                <UserBar />
            </div>
        </div>
    );
};

export default Navbar;
