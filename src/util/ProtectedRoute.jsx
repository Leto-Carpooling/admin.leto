import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "./AppContext";

export const ProtectedRoute = ({ children, ...rest }) => {
    const { user } = useContext(AppContext);
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return user ? (
                    children
                ) : (
                    <Redirect
                        to={{ pathname: "/login", state: { from: location } }}
                    />
                );
            }}
        />
    );
};
