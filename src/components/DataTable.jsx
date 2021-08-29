import React, { useState, useContext, useEffect } from "react";
import EntriesInput from "./EntriesInput";
import Paginator from "./Paginator";
import SearchBox from "./SearchBox";
import TableRow from "./TableRow";
import { api } from "../util/api";
import { AppContext } from "../util/AppContext";
import TabCatChooser from "./TabCatChooser";

const DataTable = () => {
    const { user } = useContext(AppContext);
    const [category, setCategory] = useState("all");
    useEffect(() => {
        getRows();
    });
    const [rows, setRows] = useState([]);
    return (
        <div className="m-5 border rounded-lg shadow">
            {/* Header */}
            <div className="bg-primary px-6 pt-6 rounded-t-lg flex flex-row justify-between items-center">
                <SearchBox />
                <TabCatChooser category={category} setCategory={setCategory} />
                <EntriesInput />
            </div>

            {/* Body */}
            <div className="">
                <table className="w-full text-gray-500">
                    <tbody>
                        <tr className="text-sm font-medium bg-primary text-white">
                            <td className="text-center p-4"></td>
                            <td className="text-center p-4">User ID</td>
                            <td className="text-center p-4">Name</td>
                            <td className="text-center p-4">National ID</td>
                            <td className="text-center p-4">DL Number</td>
                            <td className="text-center p-4">Vehicle</td>
                            <td className="text-center p-4">Plate Number</td>
                            <td className="text-center p-4">Uploads</td>
                            <td className="text-center p-4">Status</td>
                            <td className="text-center p-4 "></td>
                        </tr>
                        {rows.map((row, index) => {
                            if (
                                category === "all" ||
                                category === row.driverInfo.approval_status
                            ) {
                                return (
                                    <TableRow
                                        key={index}
                                        id={index}
                                        data={row}
                                        getRows={getRows}
                                    />
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="py-2 px-4 bg-gray-100 rounded-b-lg text-gray-500 text-sm">
                <Paginator />
            </div>
        </div>
    );

    function getRows() {
        const params = new FormData();
        params.append("count", 5);
        params.append("start", 0);

        const config = {
            headers: {
                auth: user.token,
            },
        };
        api.post(`admin/listDrivers.admin.php`, params, config)
            .then((resp) => {
                console.log(resp.data);
                if (resp.data.status === "OK") {
                    const rows = JSON.parse(resp.data.message);
                    setRows(rows);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

export default DataTable;
