import React, { useState } from "react";
import EntriesInput from "./EntriesInput";
import Paginator from "./Paginator";
import SearchBox from "./SearchBox";
import TableRow from "./TableRow";

const DataTable = () => {
    const [rows, setRows] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return (
        <div className="m-5 border rounded-lg shadow">
            {/* Header */}
            <div className="bg-primary px-6 pt-6 rounded-t-lg flex flex-row justify-between">
                <SearchBox />
                <EntriesInput />
            </div>

            {/* Body */}
            <div className="">
                <table className="w-full text-gray-500">
                    <tr className="text-sm font-medium bg-primary text-white">
                        <td className="text-center p-4"></td>
                        <td className="text-center p-4">User ID</td>
                        <td className="text-center p-4">Name</td>
                        <td className="text-center p-4">National ID</td>
                        <td className="text-center p-4">DL Number</td>
                        <td className="text-center p-4">Vehicle</td>
                        <td className="text-center p-4">Plate Number</td>
                        <td className="text-center p-4">Uploads</td>
                        <td className="text-center p-4 "></td>
                    </tr>
                    {rows.map((row) => (
                        <TableRow key={row} id={row} />
                    ))}
                </table>
            </div>

            {/* Footer */}
            <div className="py-2 px-4 bg-gray-100 rounded-b-lg text-gray-500 text-sm">
                <Paginator />
            </div>
        </div>
    );
};

export default DataTable;
