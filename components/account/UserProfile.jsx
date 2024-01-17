'use client'

import {format} from "date-fns";
import React, {useEffect, useState} from "react";
import {Modal, Space, Table, Tag} from "antd";
import UpdateUser from "./update";
import DataRender from "../../APIs/getData";

const UserProfile = ({dataUser,reloadData}) => {
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [dataHistory,setDataHistory] = useState([])

    const getHistoryOrder = async () => {
        const res = await DataRender.getData(`/datBan/LichSuHoaDon`);
        setDataHistory(res.data)
    }
    useEffect(() => {
        getHistoryOrder();
    }, []);
    console.log(dataHistory)
    const handleEditClick = () => {
        setEditModalVisible(true);
    };

    const handleEditModalClose = () => {
        setEditModalVisible(false);
    };

    const columns = [
        {
            title: 'Ngày Đặt',
            dataIndex: 'dateOrder',
            key: 'dateOrder',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Mã Hóa Đơn',
            dataIndex: 'bill',
            key: 'bill',
        },
        {
            title: 'Tổng Tiền',
            dataIndex: 'money',
            key: 'money',
        },
        {
            title: 'Trạng Thái',
            key: 'status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Hủy</a>
                </Space>
            ),
        },
    ];
    const data = dataHistory.map((item) => ({
        dateOrder: format(new Date(item.thoiGianDuKienBatDau), "dd/MM/yyyy HH:mm"), // Thay đổi tên trường nếu khác
        bill: item.maGiaoDich.split("/"),
        money: item.tongTien,
        status: item.trangThaiHoaDon,
    }));
    return (
        <>
            <section style={{backgroundColor: "#eee"}}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{width: 150}}
                                    />
                                    <h5 className="my-3">{dataUser[0].name}</h5>
                                    <div className="d-flex justify-content-center mb-2">
                                        <button onClick={handleEditClick} type="button" className="btn btn-primary">
                                            Chỉnh Sửa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Họ Tên</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{dataUser[0].name}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Ngày Sinh</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{`${format(new Date(dataUser[0].dateOfBirth), "dd/MM/yyyy")}`}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Giới Tính</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{dataUser[0].gender}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{dataUser[0].email}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Số Điện Thoại</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{dataUser[0].sdt}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Địa Chỉ</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{dataUser[0].address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4">
                                                Lịch Sử Đặt Bàn
                                            </p>
                                            <Table columns={columns} dataSource={data} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                visible={editModalVisible}
                title="Chỉnh Sửa Thông Tin"
                onCancel={handleEditModalClose}
                footer={null}
            >
                {/* Pass user data to the EditProfileForm component */}
                <UpdateUser dataUser={dataUser} onClose={handleEditModalClose} reloadData={reloadData} />
            </Modal>
        </>
    )
}

export default UserProfile