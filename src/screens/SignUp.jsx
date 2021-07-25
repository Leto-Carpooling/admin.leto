import React from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { MdChevronRight } from "react-icons/md";
import { colors } from "../assets/colors/colors";

const SignUp = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center my-28">
            <div className="w-4/12 shadow-lg drop-shadow-2xl rounded-lg border">
                {/* Header */}
                <div className="w-full bg-primary flex justify-center items-center flex-col py-10 px-3 rounded-t-lg">
                    <div className="flex flex-col mb-4">
                        <span className="text-7xl text-white font-serif">
                            Leto
                        </span>
                        <span className="self-end text-xs text-white font-semibold">
                            admin
                        </span>
                    </div>
                    <span className="font-medium text-white">
                        Cheaper greener rides
                    </span>
                </div>

                {/* Body */}

                <div className="flex flex-col p-3">
                    <div className="flex flex-row justify-end">
                        <span className="text-sm font-medium text-gray-500">
                            Admin Sign Up
                        </span>
                    </div>

                    {/* Text Inputs */}
                    <TextInput
                        label="Firstname"
                        type="text"
                        placeholder="Enter your firstname"
                    />
                    <TextInput
                        label="Lastname"
                        type="text"
                        placeholder="Enter your lastname"
                    />
                    <TextInput
                        label="Username"
                        type="text"
                        placeholder="Enter your username"
                    />
                    <TextInput
                        label="Password"
                        type="password"
                        placeholder="Choose a password"
                    />
                    <TextInput
                        label="Confirm password"
                        type="password"
                        placeholder="Repeat the password"
                    />

                    {/* Spacer */}
                    <div className="mb-2"></div>
                    {/* Login button */}
                    <Button
                        text="Create account"
                        icon={<MdChevronRight size={24} color={colors.white} />}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
