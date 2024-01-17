'use client'

import React, {useState} from "react";
import {Avatar, Modal, Button} from "antd";
import {UserOutlined} from "@ant-design/icons";
import UserProfile from "./UserProfile";
import DataRender from "../../APIs/getData";
import {useRouter} from "next/navigation";
import {enqueueSnackbar} from "notistack";

const AvatarUser = () => {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);
    const [dataUser,setDataUser] = useState([]);
    const logout = () => {
        // Khi người dùng đăng xuất
        localStorage.removeItem('jwt');
        router.push("/login");
        enqueueSnackbar("Đăng xuất tài khoản thành công !")
    }
    const handleAvatarClick = async () => {
        const res = await DataRender.getData("/auth/ThongTinUser")
        setDataUser(res.data);
        setModalVisible(true);
    };
    const reloadData = async () => {
        const res = await DataRender.getData("/auth/ThongTinUser")
        setDataUser(res.data);
    }

    const handleModalClose = () => {
        setModalVisible(false);
    };
    return (
        <>
            <Avatar
                onClick={handleAvatarClick}
                style={{
                    cursor: "pointer",
                    backgroundColor: "#87d068",
                    position: "fixed",
                    right: "45px",
                    bottom: "135px",
                    width: "55px",
                    height: "55px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "1000",
                }}
                icon={<UserOutlined/>}
            />
            <Modal
                className="w-75"
                style={{top: 20,bottom:0}}
                visible={modalVisible}
                title="Thông tin khách hàng"
                onCancel={handleModalClose}
                footer={[
                    <Button onClick={()=>logout()} key="back">
                        Đăng Xuất
                    </Button>,
                    <Button className="btn-danger" key="back" onClick={handleModalClose}>
                        Đóng
                    </Button>,
                ]}
                maskStyle={{position: "fixed",top:0}}
                bodyStyle={{
                    maxHeight: "calc(100vh - 120px)", // Đặt chiều cao tối đa của nội dung modal
                    overflowY: "auto", // Cho phép cuộn khi nội dung vượt quá chiều cao tối đa
                }}
            >
                <UserProfile dataUser = {dataUser} reloadData={reloadData}/>
            </Modal>
        </>
    );
};

export default AvatarUser;
