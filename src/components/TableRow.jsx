import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronUp } from "react-icons/vsc";
import { colors } from "../assets/colors/colors";
import Avatar from "./Avatar";
import DriverExpand from "./DriverExpand";
import constants from "../util/constants";
import { Toast } from "./Toast";

const TableRow = ({ id, data, getRows }) => {
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
            <tr className={"rounded text-center border my-2 text-sm " + style}>
                <td className="text-center p-4 rounded-l">
                    <Avatar
                        src={`${constants.serverUrl}storage/profile_images/${data?.userInfo.profile_image}`}
                        size={10}
                    />
                </td>
                <td className="text-center p-4">{data?.driverInfo.driverId}</td>
                <td className="text-center p-4">{`${data?.userInfo.firstname} ${data.userInfo.lastname}`}</td>
                <td className="text-center p-4">
                    {data?.driverInfo.national_id}
                </td>
                <td className="text-center p-4">
                    {data?.driverInfo.regular_license}
                </td>
                <td className="text-center p-4">
                    <div className="flex flex-col">
                        <span>{data?.vehicle.manufacturer}</span>
                        <span className="text-xs">{data?.vehicle.model}</span>
                    </div>
                </td>
                <td className="text-center p-4">
                    {data.vehicle.license_plate}
                </td>
                <td className="text-center p-4">
                    <ProgressBar progress={data?.driverInfo.uploads} max={7} />
                </td>
                <td className="text-center p-4">
                    <Toast
                        text={data?.driverInfo.approval_status}
                        theme={returnToastTheme()}
                    />
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
                        <td colSpan="10" className="mb-10 border rounded p-0">
                            <DriverExpand data={data} getRows={getRows} />
                        </td>
                    </tr>
                    <div className="mb-4"></div>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    );

    function returnToastTheme() {
        switch (data?.driverInfo.approval_status) {
            case "approved":
                return "success";
            case "declined":
                return "danger";
            default:
                return "warning";
        }
    }
};

export default TableRow;
