import React, { useState, useContext } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { MdChevronRight } from "react-icons/md";
import { colors } from "../assets/colors/colors";
import { Toast } from "../components/Toast";
import { Link } from "react-router-dom";
import { api } from "../util/api";
import { useHistory } from "react-router-dom";
import { AppContext } from "../util/AppContext";

const Login = () => {
    const history = useHistory();
    const [toastVisible, setToastVisible] = useState(false);
    const [username, setUsername] = useState("mogoa.tonny@gmail.com");
    const [password, setPassword] = useState("kenyA2020");
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useContext(AppContext);
    return (
        <div className="h-screen w-full flex justify-center items-center">
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

                <div className="flex flex-col p-3 items-center">
                    <div className="flex flex-row justify-end">
                        <span className="text-sm font-medium text-gray-500">
                            Admin Login
                        </span>
                    </div>

                    <div className="w-full">
                        <Toast text="Invaid Creds" hidden={!toastVisible} />
                    </div>
                    {/* Text Inputs */}
                    <div className="w-full">
                        <TextInput
                            label="Username"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                        />
                    </div>
                    <div className="w-full">
                        <TextInput
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                    </div>

                    {/* Spacer */}
                    <div className="mb-2"></div>
                    {/* Login button */}
                    <div className="w-full">
                        <Button
                            text="Login"
                            onClick={login}
                            icon={
                                <MdChevronRight
                                    size={24}
                                    color={colors.white}
                                />
                            }
                            loading={loading}
                        />
                    </div>
                    <div className="w-full flex justify-center items-center p-2">
                        <Link
                            to="/signup"
                            className="text-gray-500 text-sm px-5 py-2 hover:bg-gray-200 rounded"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

    function login() {
        setLoading(true);
        const params = new FormData();
        params.append("email", username);
        params.append("password", password);

        api.post(`user/login.php`, params)
            .then((resp) => {
                setLoading(false);
                console.log(resp.data);
                if (resp.data.status === "OK") {
                    const user = JSON.parse(resp.data.message);
                    setUser(user);
                    setUserOnLocalStorage(user);
                    history.push("/");
                }
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    }

    function setUserOnLocalStorage(user) {
        localStorage.setItem("@user", JSON.stringify(user));
    }
};

export default Login;
