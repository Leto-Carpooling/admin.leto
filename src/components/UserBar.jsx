import React, { useContext, useState } from "react";
import Avatar from "./Avatar";
import { AppContext } from "../util/AppContext";
import { AiOutlineLogout } from "react-icons/ai";
import { colors } from "../assets/colors/colors";
import { useHistory } from "react-router";

const UserBar = () => {
    const history = useHistory();
    const [visible, setVisible] = useState("invisible");
    const [menuVisible, setMenuVisible] = useState(false);
    const { user } = useContext(AppContext);
    document.addEventListener("click", () => {
        if (menuVisible) {
            toggleMenu();
        }
    });
    return (
        <div
            className="p-2 rounded-lg border flex flex-row text-gray-500 hover:bg-gray-100 active:bg-white cursor-pointer"
            onClick={handleClick}
        >
            <Avatar src="https://picsum.photos/200/300" size={8} />
            <div className="mx-2 flex flex-col">
                <span className="text-sm font-medium">{`${user.firstname} ${user.lastname}`}</span>
                <span className="text-xs">{user.email}</span>
            </div>
            <div
                className={
                    `absolute text-sm font-medium top-20 bg-gray-100 z-20 border w-48 right-4 py-2 rounded shadow ` +
                    visible
                }
            >
                <div
                    className="p-2 hover:bg-gray-200 flex flex-row items-center gap-4"
                    onClick={logout}
                >
                    <span>
                        <AiOutlineLogout color={colors.gray} size={25} />
                    </span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );

    function logout() {
        localStorage.removeItem("@user");
        history.go(0);
    }
    function handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    }
    function toggleMenu() {
        if (!menuVisible) {
            setVisible("visible");
        } else {
            setVisible("invisible");
        }
        setMenuVisible((menuVisible) => !menuVisible);
    }
};

export default UserBar;
