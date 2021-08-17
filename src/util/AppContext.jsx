import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(getUser);

    const context = { user, setUser };

    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
};

function getUser() {
    return JSON.parse(localStorage.getItem("@user"));
}
