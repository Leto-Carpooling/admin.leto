import React from "react";
import Map from "../components/map/Map";
const Simulator = () => {
    return (
        <div className="flex-grow h-screen flex flex-row">
            <div className="w-3/12">
                <TextInput></TextInput>
            </div>
            <div className="flex-grow">
                <Map />
            </div>
        </div>
    );
};

export default Simulator;
