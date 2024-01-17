'use client'
import React, {useEffect, useState} from 'react'
import Breadcrumb from "../../../../components/layouts/Breadcrumb";
import {DatePicker, Empty, Space, Image, Input, Button} from 'antd';
import DataRender from "../../../../APIs/getData";
import {useRouter} from "next/navigation";
import { format } from "date-fns";
import {enqueueSnackbar} from "notistack";
import getData from "../../../../APIs/getData";
import {toast} from "react-toastify";

const {RangePicker} = DatePicker;

const BookingPage = () => {
    const router = useRouter();
    const check = localStorage.getItem('jwt');
    useEffect(() => {
        // Check for JWT token when the component mounts
        if (!check) {
            router.push("/login");
            enqueueSnackbar("Cần đăng nhập để đặt bàn !");
        }
    }, [check]);
    const breadcrumbItems = [
        {text: 'Trang Chủ', link: '/'},
        {text: 'Đặt Bàn', link: '/booking'}
    ];

    const {RangePicker} = DatePicker;
    const [tableList, setTableList] = useState([]);
    const [tableDetail, setTableDetail] = useState([]);
    const [noteData, setNoteData] = useState("");
    const [timeOrder, setTimeOrder] = useState("");
    const [tableID, setTableID] = useState("");
    const currencyFormatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND',currencyDisplay: 'code' });
    const filterTable = async (value, dateString) => {
        // console.log('Formatted Selected Time: ', dateString);
        const [dateStart, timeStart] = dateString[0].split(" ");
        const [dateEnd, timeEnd] = dateString[1].split(" ");
        let startTime = `${format(new Date(dateStart), "yyyy-MM-dd")}T${timeStart}`;
        let endTime = `${format(new Date(dateEnd), "yyyy-MM-dd")}T${timeEnd}`;
        const res = await DataRender.filterTable(startTime, endTime);
        setTableList(res.data);
        enqueueSnackbar('Lọc bàn trống thành công !')
    };
    const selectTime = (value, dataString) => {
        setTimeOrder(dataString);
    };
    const handleViewTableDetail = async (id) => {
        console.log("table ID selected: ", id)
        if (id != null) {
            const res = await DataRender.getTableDetail(id);
            setTableDetail(res.data);
        }
    }
    const handleSubmit = async (id,note,time) => {
        if(id !== "" && note !== "" && time !== ""){
            const res = await getData.orderTable(id,note,time);
            enqueueSnackbar("Đặt bàn thành công, vui lòng đợi xác nhận từ nhà hàng!");
        }
        else{
            enqueueSnackbar("Không được chọn thiếu thông tin!");
        }
    }
    return (
        <>
            <Breadcrumb items={breadcrumbItems} pageTitle="Đặt Bàn"/>
            <div className="container h-100">
                <div className="main-body h-50">
                    <div className="row h-100">
                        <div className="col-lg-6">
                            <div className="card h-booking">
                                <div className="row h-25">
                                    <div className="pl-2 font-weight-bold fs-3">Lọc Bàn Trống</div>
                                    <Space direction="vertical" size={12}>
                                        <RangePicker
                                            showTime={{
                                                format: 'HH:mm',
                                            }}
                                            format="MM-DD-YYYY HH:mm"
                                            placeholder={['Từ Thời Gian', 'Đến Thời Gian']}
                                            onChange={filterTable}
                                        />
                                    </Space>
                                </div>
                                <div className="row h-75">
                                    <div className="card-body overflow-auto h-100">
                                        {tableList && tableList.length > 0 ? (
                                            <ul className="list-group text-white">
                                                {tableList.map((table) => (
                                                    <li key={table.banID} style={{cursor: 'pointer'}}
                                                        className="list-group-item d-flex justify-content-between align-content-center"
                                                        onClick={() => {
                                                            handleViewTableDetail(table.banID)
                                                            setTableID(table.banID)
                                                        }}>
                                                        <div className="d-flex flex-row gap-2"><img
                                                            src={`${table.hinhAnhBanURL}`} width={40}
                                                            alt={`Bàn số ${table.soBan}`}/>
                                                            <div className="ml-5"><h6 className="mb-0">Bàn
                                                                Số {table.soBan}</h6>
                                                                <div className="about"><span>Loại Bàn : </span>
                                                                    <span> <i>{table.tenLoaiBan}</i></span></div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>) : (
                                            <Empty description="Vui lòng lọc để tìm bàn trống"/>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card h-booking">
                                {tableDetail && tableDetail.length > 0 ? (
                                    tableDetail.map((table) => (
                                        <div className="card-body">
                                            <div className="d-flex flex-column align-items-center text-center">
                                                <Image
                                                    width={110}
                                                    height={110}
                                                    className="p-1 bg-primary"
                                                    src={`${table.hinhAnhBanURL}`}
                                                />
                                                <div className="mt-3">
                                                    <h4>Bàn Số {table.soBan}</h4>
                                                    <p className="text-secondary mb-1">Vị Trí: {table.viTri}</p>
                                                    <p className="text-muted font-size-sm">
                                                        {table.tenLoaiBan}
                                                    </p>
                                                </div>
                                            </div>
                                            <hr className="my-4"/>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                    <h6 className="mb-0">
                                                        <svg width="32px" height="32px" viewBox="0 0 1024 1024"
                                                             className="icon mr-2" version="1.1"
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             fill="#000000">
                                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                               stroke-linejoin="round"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <path
                                                                    d="M691.573 338.89c-1.282 109.275-89.055 197.047-198.33 198.331-109.292 1.282-197.065-90.984-198.325-198.331-0.809-68.918-107.758-68.998-106.948 0 1.968 167.591 137.681 303.31 305.272 305.278C660.85 646.136 796.587 503.52 798.521 338.89c0.811-68.998-106.136-68.918-106.948 0z"
                                                                    fill="#4A5699"></path>
                                                                <path
                                                                    d="M294.918 325.158c1.283-109.272 89.051-197.047 198.325-198.33 109.292-1.283 197.068 90.983 198.33 198.33 0.812 68.919 107.759 68.998 106.948 0C796.555 157.567 660.839 21.842 493.243 19.88c-167.604-1.963-303.341 140.65-305.272 305.278-0.811 68.998 106.139 68.919 106.947 0z"
                                                                    fill="#C45FA0"></path>
                                                                <path
                                                                    d="M222.324 959.994c0.65-74.688 29.145-144.534 80.868-197.979 53.219-54.995 126.117-84.134 201.904-84.794 74.199-0.646 145.202 29.791 197.979 80.867 54.995 53.219 84.13 126.119 84.79 201.905 0.603 68.932 107.549 68.99 106.947 0-1.857-213.527-176.184-387.865-389.716-389.721-213.551-1.854-387.885 178.986-389.721 389.721-0.601 68.991 106.349 68.933 106.949 0.001z"
                                                                    fill="#E5594F"></path>
                                                            </g>
                                                        </svg>
                                                        Số Người Tối Đa
                                                    </h6>
                                                    <span className="text-secondary">{table.soNguoiToiDa}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                    <h6 className="mb-0">
                                                        <svg fill="#000000" width="32px" height="32px"
                                                             viewBox="0 0 16 16"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                               stroke-linejoin="round"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <path
                                                                    d="M12.32 8a3 3 0 0 0-2-.7H5.63A1.59 1.59 0 0 1 4 5.69a2 2 0 0 1 0-.25 1.59 1.59 0 0 1 1.63-1.33h4.62a1.59 1.59 0 0 1 1.57 1.33h1.5a3.08 3.08 0 0 0-3.07-2.83H8.67V.31H7.42v2.3H5.63a3.08 3.08 0 0 0-3.07 2.83 2.09 2.09 0 0 0 0 .25 3.07 3.07 0 0 0 3.07 3.07h4.74A1.59 1.59 0 0 1 12 10.35a1.86 1.86 0 0 1 0 .34 1.59 1.59 0 0 1-1.55 1.24h-4.7a1.59 1.59 0 0 1-1.55-1.24H2.69a3.08 3.08 0 0 0 3.06 2.73h1.67v2.27h1.25v-2.27h1.7a3.08 3.08 0 0 0 3.06-2.73v-.34A3.06 3.06 0 0 0 12.32 8z"></path>
                                                            </g>
                                                        </svg>
                                                        Tiền Bàn
                                                    </h6>
                                                    <span className="text-secondary">{currencyFormatter.format(table.giaTien)}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    ))
                                ) : (
                                    <Empty description="Chi tiết bàn được chọn"/>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row h-50">
                        <div className="col-12">
                            <DatePicker
                                className="w-25"
                                format="MM-DD-YYYY HH:mm"
                                showTime={{
                                    format: 'HH:mm',
                                }}
                                onChange={selectTime}
                                placeholder="Chọn thời gian đến"
                            />
                            <form className="mt-2 d-flex gap-2">
                                <Input value={noteData} onChange={(e) => setNoteData(e.target.value)} placeholder="Ghi chú..." className="w-80" showCount maxLength={100}/>
                                <Button onClick={() => handleSubmit(tableID,noteData,timeOrder)} type="primary">Đặt Bàn</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BookingPage