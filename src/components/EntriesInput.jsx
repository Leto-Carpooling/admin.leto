import React from "react";

const EntriesInput = () => {
    return (
        <div className="flex flex-row gap-3 items-center">
            <span className="text-white font-medium">show</span>
            <input
                type="number"
                className="w-16 focus:outline-none rounded px-2 py-1"
            />
            <span className="text-white font-medium">entries</span>
        </div>
    );
};

export default EntriesInput;
