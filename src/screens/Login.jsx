import React from "react";
import TextInput from "../components/TextInput";

const Login = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="w-4/12 shadow-lg drop-shadow-2xl rounded-lg">
                {/* Header */}
                <div className="w-full bg-primary flex justify-center items-center flex-col py-5 px-3 rounded-t-lg">
                    <span className="text-7xl text-white font-serif">Leto</span>
                    <span className="font-medium text-white">
                        Cheaper greener rides
                    </span>
                </div>

                {/* Body */}

                <div className="flex flex-col p-3">
                    <div className="flex flex-row justify-end">
                        <span className="text-sm text-gray-500">
                            Admin Login
                        </span>
                    </div>

                    {/* Text Input */}
                    <TextInput
                        label="username"
                        placeholder="Enter your username"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
