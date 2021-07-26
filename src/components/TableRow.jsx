import React, { useState } from "react";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronUp } from "react-icons/vsc";
import { colors } from "../assets/colors/colors";
import SmallButton from "./SmallButton";
import Avatar from "./Avatar";
import DriverExpand from "./DriverExpand";

const TableRow = ({ id }) => {
    const [expanded, setExpanded] = useState(false);
    let style = "bg-gray-100";
    if (id % 2 !== 0) {
        style = "bg-white";
    }

    function toggleExpand() {
        setExpanded(!expanded);
    }

    return (
        <React.Fragment>
            <tr className={"rounded border my-2 text-sm " + style}>
                <td className="text-center p-4 rounded-l flex justify-center items-center">
                    <Avatar src="https://picsum.photos/200/300" size={10} />
                </td>
                <td className="text-center p-4">1</td>
                <td className="text-center p-4">John Doe</td>
                <td className="text-center p-4">38069151</td>
                <td className="text-center p-4">AB8069151</td>
                <td className="text-center p-4">
                    <div className="flex flex-col">
                        <span>Subaru</span>
                        <span className="text-xs">Impreza</span>
                    </div>
                </td>
                <td className="text-center p-4">KBX 348Y</td>
                <td className="text-center p-4">
                    <ProgressBar />
                </td>
                <td className="text-center p-4">
                    <div className="w-full h-full flex justify-center items-center">
                        <div
                            className="flex w-10 h-10 justify-center items-center p-1 rounded-full hover:bg-gray-200"
                            onClick={toggleExpand}
                        >
                            {!expanded ? (
                                <VscChevronDown color={colors.gray} size={20} />
                            ) : (
                                <VscChevronUp color={colors.gray} size={20} />
                            )}
                        </div>
                    </div>
                </td>
            </tr>
            {expanded ? (
                <React.Fragment>
                    <tr className="rounded w-full mb-2 shadow">
                        <td colSpan="9" className="mb-10 border rounded p-0">
                            <DriverExpand />
                        </td>
                    </tr>
                    <div className="mb-4"></div>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    );
};

export default TableRow;
