import React from "react";

const TableRow = ({ id }) => {
    let style = "bg-gray-100";
    if (id % 2 !== 0) {
        style = "bg-white";
    }
    return (
        <tr className={"rounded border my-2 text-sm " + style}>
            <td className="text-center p-4 rounded-l">Jill</td>
            <td className="text-center p-4">Smith</td>
            <td className="text-center p-4">50</td>
            <td className="text-center p-4">50</td>
            <td className="text-center p-4">50</td>
            <td className="text-center p-4">50</td>
            <td className="text-center p-4">50</td>
            <td className="text-center p-4 rounded-r">50</td>
        </tr>
    );
};

export default TableRow;
