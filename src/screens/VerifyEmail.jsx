import React, { useState, useContext } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { AppContext } from "../util/AppContext";
import { api } from "../util/api";
import { Toast } from "../components/Toast";
import { useHistory } from "react-router-dom";

const VerifyEmail = () => {
    const history = useHistory();
    const { user } = useContext(AppContext);
    const [code, onChangeCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [toastText, setToastText] = useState("");
    const [toastVisible, setToastVisible] = useState(false);
    return (
        <div className="w-full h-screen flex justify-center items-center text-gray-500">
            <div className="flex flex-col shadow-md border z-20 p-10 rounded-md">
                <span className="text-2xl text-gray-700 mb-4">
                    Verify Email
                </span>

                <span className="mb-2 w-10/12">
                    A 6-digit verifcation code has been sent to your email.
                </span>
                <Toast text={toastText} hidden={!toastVisible} />
                <TextInput
                    label="Enter verification code"
                    placeholder="Enter verification code"
                    onChange={(event) => onChangeCode(event.target.value)}
                />
                <div className="mb-2"></div>
                <Button text="Submit" loading={loading} onClick={verify} />
            </div>
        </div>
    );

    function verify() {
        setLoading(true);
        const params = new FormData();
        params.append("code", code);

        const config = {
            headers: {
                auth: user.token,
            },
        };

        api.post(`user/confirmEmail.php`, params, config)
            .then((resp) => {
                console.log(resp.data);
                setLoading(false);
                if (resp.data.status === "OK") {
                    setUserOnLocalStorage();
                    history.push("/");
                } else {
                    setToastVisible(true);
                    setToastText(
                        resp.data.message
                            ? resp.data.message
                            : "Something went wrong."
                    );
                }
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }

    function setUserOnLocalStorage() {
        localStorage.setItem("@user", JSON.stringify(user));
    }
};

export default VerifyEmail;
