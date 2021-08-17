import React from "react";
import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost/leto_apis/OT_server/src/",
});
