import React, { useState, useEffect, useContext } from "react";
import Avatar from "./Avatar";
import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdDirectionsCar } from "react-icons/md";
import { colors } from "../assets/colors/colors";
import Button from "./Button";
import TabItem from "./TabItem";
import constants from "../util/constants";
import { AppContext } from "../util/AppContext";
import { api } from "../util/api";
import { Toast } from "./Toast";
import Modal from "./Modal";

const DriverExpand = ({ data, getRows }) => {
    const [documents, setDocuments] = useState([]);
    const [currentDoc, setCurrentDoc] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const { user } = useContext(AppContext);
    const [modalPrimaryAction, setModalPrimaryAction] = useState(null);
    const [modalTitle, setModalTitle] = useState("");
    const [modalBody, setModalBody] = useState("");
    const [modalIcon, setModalIcon] = useState(null);

    useEffect(() => {
        getDocs();
    }, []);
    return (
        <div className="flex flex-row">
            {/* the modal */}
            <Modal
                title={modalTitle}
                body={modalBody}
                icon={modalIcon}
                visible={modalVisible}
                setVisible={setModalVisible}
                btnGroup={
                    <React.Fragment>
                        {modalPrimaryAction}
                        <Button
                            text="Cancel"
                            icon={<MdClose color={colors.white} size={16} />}
                            theme="danger"
                            onClick={() => setModalVisible(false)}
                        />
                    </React.Fragment>
                }
            />
            <div className="w-3/12 bg-gray-100 flex flex-col items-center gap-4 text-gray-600">
                {/* Avatar div */}
                <div className="flex flex-row items-center gap-4 p-4 m-4">
                    <Avatar
                        src={`${constants.serverUrl}storage/profile_images/${data?.userInfo.profile_image}`}
                        size={20}
                    />
                    <div className="flex flex-col">
                        <span className="text-lg">{`${data?.userInfo.firstname} ${data.userInfo.lastname}`}</span>
                        <span className="text-xs font-medium mb-2">
                            {data?.userInfo.email}
                        </span>
                        <span className="text-xs font-medium">
                            {data?.userInfo.phone}
                        </span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex flex-col w-full mb-5">
                    <div className="bg-white p-3 text-center text-sm font-medium border-b border-r border-gray-100 flex flex-row items-center justify-center gap-4">
                        <MdDirectionsCar
                            color={data.vehicle.vehicle_color}
                            size={30}
                        />
                        <span className="text-xs font-medium">{`${data.vehicle.capacity} riders`}</span>
                    </div>

                    <div className="flex flex-row justify-between items-center p-4">
                        <span className="font-medium">Documents</span>
                        <span className="text-xs font-medium">{`${data.driverInfo.uploads} of 7`}</span>
                    </div>

                    {documents.map((document, index) => (
                        <TabItem
                            key={index}
                            active={currentDoc === index}
                            label={document.name}
                            onClick={() => {
                                setCurrentDoc(index);
                            }}
                        />
                    ))}
                    {documents.length === 0 ? (
                        <div className="bg-white p-3 text-center text-sm font-medium border-r border-gray-100">
                            No document attached.
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="w-9/12 flex flex-col p-4 gap-3 justify-between items-center">
                {/* Viewer */}
                <div className="border rounded mb-4 flex justify-center items-center flex-grow">
                    <img
                        src={`${constants.serverUrl}${documents[currentDoc]?.path}`}
                        alt="&nbsp;Sorry. Could not load document.&nbsp;"
                    />
                </div>

                {/* Button Bar */}
                <div className="w-full">
                    <div className="flex flex-row justify-end gap-5">
                        {data.driverInfo.approval_status === "pending" ? (
                            <React.Fragment>
                                <Button
                                    text="Approve"
                                    icon={
                                        <MdCheck
                                            color={colors.white}
                                            size={16}
                                        />
                                    }
                                    theme="primary"
                                    onClick={() => {
                                        setModalVisible(true);
                                        setModalPrimaryAction(
                                            <Button
                                                text="OK"
                                                icon={
                                                    <MdCheck
                                                        color={colors.white}
                                                        size={16}
                                                    />
                                                }
                                                theme="primary"
                                                onClick={() => {
                                                    approve(true);

                                                    setModalVisible(false);
                                                }}
                                            />
                                        );
                                        setModalBody(
                                            "Do you want to approve this driver?"
                                        );
                                        setModalTitle(
                                            "Confirm approve driver?"
                                        );
                                        setModalIcon(
                                            <MdCheck
                                                color={colors.success}
                                                size={80}
                                            />
                                        );
                                    }}
                                />
                                <Button
                                    text="Reject"
                                    icon={
                                        <MdClose
                                            color={colors.white}
                                            size={16}
                                        />
                                    }
                                    theme="danger"
                                    onClick={() => {
                                        setModalVisible(true);
                                        setModalPrimaryAction(
                                            <Button
                                                text="OK"
                                                icon={
                                                    <MdCheck
                                                        color={colors.white}
                                                        size={16}
                                                    />
                                                }
                                                theme="primary"
                                                onClick={() => {
                                                    approve(false);
                                                    setModalVisible(false);
                                                }}
                                            />
                                        );
                                        setModalBody(
                                            "Do you want to reject this driver?"
                                        );
                                        setModalTitle("Confirm reject driver?");
                                        setModalIcon(
                                            <MdClose
                                                color={colors.danger}
                                                size={80}
                                            />
                                        );
                                    }}
                                />
                            </React.Fragment>
                        ) : (
                            <Toast
                                text={data.driverInfo.approval_status}
                                theme={
                                    data.driverInfo.approval_status ===
                                    "approved"
                                        ? "success"
                                        : "danger"
                                }
                            />
                        )}
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );

    function approve(approve) {
        const config = {
            headers: {
                auth: user.token,
            },
        };
        if (approve) {
            const params = new FormData();
            params.append("id", data.driverInfo.driverId);
            params.append("action", "a");

            api.post(`admin/approveDriver.admin.php`, params, config)
                .then((resp) => {
                    console.log(resp.data);
                    getRows();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            const params = new FormData();
            params.append("id", data.driverInfo.driverId);
            params.append("action", "d");

            api.post(`admin/approveDriver.admin.php`, params, config)
                .then((resp) => {
                    console.log(resp.data);
                    getRows();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    function getDocs() {
        const params = new FormData();
        params.append("id", data.driverInfo.driverId);

        const config = {
            headers: {
                auth: user.token,
            },
        };

        api.post(`admin/driverInfo.admin.php`, params, config)
            .then((resp) => {
                //console.log(JSON.parse(resp.data.message));
                const docsAsStrings = JSON.parse(resp.data.message);
                //console.log(docsAsStrings);
                const docs = [];
                docsAsStrings.forEach((docsAsString) => {
                    const doc = {
                        name: JSON.parse(docsAsString).name,
                        path: JSON.parse(docsAsString).path,
                    };
                    docs.push(doc);
                });
                console.log(docs);
                setDocuments(docs);
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

export default DriverExpand;
