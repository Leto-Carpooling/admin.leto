import React from "react";

const TabItem = ({ active, label, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-white  text-center text-sm font-medium border-b border-r border-gray-100 flex flex-row ${
                !active && "hover:bg-primary hover:text-white"
            }`}
        >
            <span className={"w-3 " + (active ? "bg-primary" : null)}></span>
            <span className="p-3">{label}</span>
        </div>
    );
};

export default TabItem;
