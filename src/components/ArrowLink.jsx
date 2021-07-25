import React from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { colors } from "../assets/colors/colors";

const ArrowLink = ({ type }) => {
    return (
        <span className="p-1 mx-1 rounded-sm bg-white hover:bg-gray-200">
            {type === "left" ? (
                <MdChevronLeft size={20} color={colors.gray} />
            ) : (
                <MdChevronRight size={20} color={colors.gray} />
            )}
        </span>
    );
};

export default ArrowLink;
