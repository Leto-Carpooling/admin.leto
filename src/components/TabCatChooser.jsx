import React from "react";

const TabCatChooser = ({ category, setCategory }) => {
    return (
        <div className="flex flex-row gap-4">
            <div
                onClick={() => {
                    setCategory("all");
                }}
                className={`cursor-pointer py-1 px-5 rounded-3xl flex justify-center items-center ${
                    category === "all" ? "bg-white" : "bg-primary"
                }`}
            >
                <span
                    className={`text-sm font-medium ${
                        category === "all" ? "text-blue-500" : "text-white"
                    }`}
                >
                    All
                </span>
            </div>
            <div
                onClick={() => {
                    setCategory("pending");
                }}
                className={`cursor-pointer py-1 px-4 rounded-3xl bg-white flex justify-center items-center ${
                    category === "pending" ? "bg-white" : "bg-primary"
                }`}
            >
                <span
                    className={`text-sm font-medium ${
                        category === "pending"
                            ? "text-yellow-500"
                            : "text-white"
                    }`}
                >
                    Pending
                </span>
            </div>
            <div
                onClick={() => {
                    setCategory("approved");
                }}
                className={`cursor-pointer py-1 px-4 rounded-full bg-white flex justify-center items-center ${
                    category === "approved" ? "bg-white" : "bg-primary"
                }`}
            >
                <span
                    className={`text-sm font-medium ${
                        category === "approved"
                            ? "text-green-500"
                            : "text-white"
                    }`}
                >
                    Approved
                </span>
            </div>
            <div
                onClick={() => {
                    setCategory("declined");
                }}
                className={`cursor-pointer py-1 px-4 rounded-full bg-white flex justify-center items-center ${
                    category === "declined" ? "bg-white" : "bg-primary"
                }`}
            >
                <span
                    className={`text-sm font-medium ${
                        category === "declined" ? "text-red-500" : "text-white"
                    }`}
                >
                    Declined
                </span>
            </div>
        </div>
    );
};

export default TabCatChooser;
