import React from "react";
import { MdSearch } from "react-icons/md";
import { colors } from "../assets/colors/colors";

const SearchBox = () => {
    return (
        <div className="flex flex-row gap-3 items-center bg-white rounded-3xl p-3">
            <MdSearch color={colors.primary} size={20} />
            <input
                type="text"
                name="search"
                className=" focus:outline-none"
                autoComplete="off"
                placeholder="Search by anything"
            />
        </div>
    );
};

export default SearchBox;
