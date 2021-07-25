import React, { useState } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import ArrowLink from "./ArrowLink";
import PageLink from "./PageLink";

const Paginator = () => {
    const [links, setLinks] = useState([
        { num: 1, active: false },
        { num: 2, active: true },
        { num: 3, active: false },
        { num: 4, active: false },
        { num: 5, active: false },
    ]);
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="text-xs font-medium">
                Showing 1 to 10 of 100 entries
            </div>

            {/* Pagination Links */}
            <div className="flex flex-row items-center">
                <ArrowLink type="left" />
                {links.map((link, index) => (
                    <PageLink key={index} num={link.num} active={link.active} />
                ))}
                <ArrowLink type="right" />
            </div>
        </div>
    );
};

export default Paginator;
