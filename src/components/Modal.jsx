import React from "react";
import { colors } from "../assets/colors/colors";
import { MdClose } from "react-icons/md";

const Modal = ({ visible, setVisible, title, body, icon, btnGroup }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-screen bg-black bg-opacity-70 h-screen z-40 flex justify-center items-center ${
                visible ? "visible" : "invisible"
            }`}
        >
            <div className="bg-white rounded-lg absolute shadow">
                <div className="font-serif text-2xl text-gray-600 border-b px-6 py-6 rounded-t-lg justify-between items-center flex-row flex gap-32">
                    <span>{title}</span>
                    <span
                        className="p-2 rounded-full hover:bg-gray-100"
                        onClick={() => setVisible(false)}
                    >
                        <MdClose color={colors.gray} size={25} />
                    </span>
                </div>
                <div className="px-6 py-2 flex flex-row gap-7 items-center">
                    {icon}
                    <span className="">{body}</span>
                </div>
                <div className="rounded-b-lg p-3 flex-row flex justify-end items-center">
                    {btnGroup}
                </div>
            </div>
        </div>
    );
};

export default Modal;
