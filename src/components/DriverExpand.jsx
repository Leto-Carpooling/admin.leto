import React, { useState } from "react";
import Avatar from "./Avatar";
import SmallButton from "./SmallButton";
import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdDirectionsCar } from "react-icons/md";
import { colors } from "../assets/colors/colors";
import Button from "./Button";
import TabItem from "./TabItem";

const DriverExpand = () => {
    const [tabs, setTabs] = useState([
        { label: "National ID", active: true },
        { label: "Driving License", active: false },
        { label: "Cert of Good Conduct", active: false },
    ]);
    return (
        <div className="flex flex-row">
            <div className="w-3/12 bg-gray-100 flex flex-col items-center gap-4 text-gray-600">
                {/* Avatar div */}
                <div className="flex flex-row items-center gap-4 p-4 m-4">
                    <Avatar src="https://picsum.photos/200/300" size={20} />
                    <div className="flex flex-col">
                        <span className="text-lg">John Doe</span>
                        <span className="text-xs font-medium">
                            john.doe@gmail.com
                        </span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex flex-col w-full mb-5">
                    <div className="bg-white p-3 text-center text-sm font-medium border-b border-r border-gray-100 flex flex-row items-center justify-center gap-4">
                        <MdDirectionsCar color={colors.primary} size={30} />
                        <span className="text-xs font-medium">4 riders</span>
                    </div>

                    <div className="flex flex-row justify-between items-center p-4">
                        <span className="font-medium">Documents</span>
                        <span className="text-xs font-medium">6 of 10</span>
                    </div>

                    {tabs.map((tab) => (
                        <TabItem
                            key={tab.label}
                            active={tab.active}
                            label={tab.label}
                        />
                    ))}
                    {tabs.length === 0 ? (
                        <div className="bg-white p-3 text-center text-sm font-medium border-r border-gray-100">
                            No document attached.
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="w-9/12 flex flex-col p-4 gap-3 justify-center items-center">
                {/* Viewer */}
                <div className="border rounded mb-4 flex justify-center items-center">
                    <img src="https://picsum.photos/794/1123" alt="document" />
                </div>

                {/* Button Bar */}
                <div className="w-full">
                    <div className="flex flex-row justify-end gap-5">
                        <SmallButton
                            text="Approve"
                            icon={<MdCheck color={colors.white} size={16} />}
                            theme="primary"
                        />
                        <SmallButton
                            text="Reject"
                            icon={<MdClose color={colors.white} size={16} />}
                            theme="danger"
                        />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default DriverExpand;
