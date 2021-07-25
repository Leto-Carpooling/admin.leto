import React from "react";
import EntriesInput from "./EntriesInput";
import Paginator from "./Paginator";
import SearchBox from "./SearchBox";

const DataTable = () => {
    return (
        <div className="m-5 border rounded-lg shadow">
            {/* Header */}
            <div className="bg-primary p-5 rounded-t-lg flex flex-row justify-between">
                <SearchBox />
                <EntriesInput />
            </div>

            {/* Body */}
            <div className="p-4">
                <table className="w-full text-gray-500">
                    <tr className="text-sm font-medium bg-primary text-white">
                        <td className="text-center">User ID</td>
                        <td className="text-center">Name</td>
                        <td className="text-center">National ID</td>
                        <td className="text-center">DL Number</td>
                        <td className="text-center">Vehicle</td>
                        <td className="text-center">Plate Number</td>
                        <td className="text-center">Uploads</td>
                        <td className="text-center">Action</td>
                    </tr>
                    <tr>
                        <td className="text-center">Jill</td>
                        <td className="text-center">Smith</td>
                        <td className="text-center">50</td>
                    </tr>
                    <tr>
                        <td className="text-center">Eve</td>
                        <td className="text-center">Jackson</td>
                        <td className="text-center">94</td>
                    </tr>
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
