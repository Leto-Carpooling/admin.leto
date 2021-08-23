import React, { useState, useContext } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { MdChevronRight } from "react-icons/md";
import { colors } from "../assets/colors/colors";
import { api } from "../util/api";
import { Toast } from "../components/Toast";
import { AppContext } from "../util/AppContext";
import { useHistory } from "react-router-dom";

const SignUp = () => {
    const history = useHistory();
    const { user, setUser } = useContext(AppContext);
    const [firstName, onChangeFirstName] = useState("Tony");
    const [lastName, onChangeLastName] = useState("Mogoa");
    const [username, onChangeUsername] = useState("mogoa.tonny@gmail.com");
    const [password, onChangePassword] = useState("kenyA2020");
    const [confirmPassword, onChangeConfirmPassword] = useState("kenyA2020");
    const [toastVisible, setToastVisible] = useState(false);
    const [toastText, setToastText] = useState("");
    const [loading, setLoading] = useState(false);

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

                    <Toast text={toastText} hidden={!toastVisible} />
                    {/* Text Inputs */}
                    <TextInput
                        label="Firstname"
                        type="text"
                        placeholder="Enter your firstname"
                        value={firstName}
                        onChange={(event) =>
                            onChangeFirstName(event.target.value)
                        }
                    />
                    <TextInput
                        label="Lastname"
                        type="text"
                        placeholder="Enter your lastname"
                        value={lastName}
                        onChange={(event) =>
                            onChangeLastName(event.target.value)
                        }
                    />
                    <TextInput
                        label="Username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(event) =>
                            onChangeUsername(event.target.value)
                        }
                    />
                    <TextInput
                        label="Password"
                        type="password"
                        placeholder="Choose a password"
                        value={password}
                        onChange={(event) =>
                            onChangePassword(event.target.value)
                        }
                    />
                    <TextInput
                        label="Confirm password"
                        type="password"
                        placeholder="Repeat the password"
                        value={confirmPassword}
                        onChange={(event) =>
                            onChangeConfirmPassword(event.target.value)
                        }
                    />

                    {/* Spacer */}
                    <div className="mb-2"></div>
                    {/* Login button */}
                    <Button
                        text="Create account"
                        icon={<MdChevronRight size={24} color={colors.white} />}
                        onClick={signup}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    );

    function signup() {
        setLoading(true);
        checkEmail();
        console.log(username);
    }

    function checkEmail() {
        const params = new FormData();
        params.append("action", "e");
        params.append("email", username);

        api.post(`user/signup.php`, params)
            .then((resp) => {
                console.log(resp.data);
                if (resp.data.status === "OK") {
                    addToDb();
                } else {
                    setToastText(resp.data.message);
                    setToastVisible(true);
                }
            })
            .catch((err) => console.log(err));
    }

    function addToDb() {
        const params = new FormData();
        params.append("action", "s");
        params.append("email", username);
        params.append("password", password);

        api.post(`user/signup.php`, params)
            .then((resp) => {
                console.log(resp.data);
                if (resp.data.status === "OK") {
                    const user = JSON.parse(resp.data.message);
                    setUser(user);
                    setProfile(user.token);
                } else {
                    setToastText(
                        resp.data.message
                            ? resp.data.message
                            : "Something went wrong"
                    );
                    setToastVisible(true);
                }
            })
            .catch((err) => console.log(err));
    }

    function setProfile(token) {
        const params = new FormData();
        params.append("first-name", firstName);
        params.append("last-name", lastName);
        params.append("email", "");
        params.append("phone", "");

        const config = {
            headers: {
                auth: token,
            },
        };
        api.post(`user/editProfile.php`, params, config)
            .then((resp) => {
                console.log(resp.data);
                if (resp.data.status === "OK") {
                    setLoading(false);
                    history.push("verifyemail");
                } else {
                    setToastText(resp.data.message);
                    setToastVisible(true);
                }
            })
            .catch((err) => console.log(err));
    }
};

export default SignUp;
