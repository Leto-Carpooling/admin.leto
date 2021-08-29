import React, { useState } from "react";

const EntriesInput = () => {
    const [selected, onChangeSelected] = useState(10);
    return (
        <div className="flex flex-row gap-3 items-center">
            <span className="text-white font-medium">show</span>
            {/* <input
                type="number"
                value="10"
            /> */}
            <select
                value={selected}
                onChange={(event) => onChangeSelected(event.target.value)}
                className="w-16 focus:outline-none rounded px-2 py-1 text-gray-600 bg-white"
            >
                <option value={5} className="p-10">
                    5
                </option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
            </select>

            <span className="text-white font-medium">entries</span>
        </div>
    );
};

export default EntriesInput;
