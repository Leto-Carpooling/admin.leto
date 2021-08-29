import React from "react";

const EntriesInput = () => {
    return (
        <div className="flex flex-row gap-3 items-center">
            <span className="text-white font-medium">show</span>
            <input
                type="number"
                value="10"
                className="w-16 focus:outline-none rounded px-2 py-1 text-gray-600"
            />
            <span className="text-white font-medium">entries</span>
        </div>
    );
};

export default EntriesInput;
