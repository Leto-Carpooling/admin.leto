import React from "react";

const PageLink = ({ num, active }) => {
    let activeStyle;
    if (active) {
        activeStyle = "bg-primary text-white";
    }
    return (
        <span
            className={
                "px-3 py-1 font-serif mx-1 rounded-sm hover:bg-white font-medium text-xs " +
                activeStyle
            }
        >
            {num}
        </span>
    );
};

export default PageLink;
