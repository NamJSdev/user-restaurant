"use client";
import DataRender from "../APIs/getData";
import React from 'react';

const Menu = () => {
    const [apiData, setApiData] = React.useState([]);
    const [activeTab, setActiveTab] = React.useState(0)

    const getAllMenus = async () => {
        const api = "/LoaiMonAn/HienThiLoaiMonAnKemMonAn";
        try {
            const res = await DataRender.getData(api);
            if (res) {
                const apiData = res.data;
                setApiData(apiData); // Set the data in the state
                console.log(apiData);
            } else {
                console.log(`Menu list not found`);
            }
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu từ API:", error);
        }
    };

    React.useEffect(() => {
        getAllMenus();
    }, []);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                        Thực Đơn
                    </h5>
                    <h1 className="mb-5">Món Ăn Đặc Sắc</h1>
                </div>
                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        {apiData.map((loaiMonAn, index) => (
                            <li className="nav-item" key={loaiMonAn.id}>
                                <a
                                    className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${index === activeTab ? 'active' : ''}`}
                                    data-bs-toggle="pill"
                                    href={`#tab-${loaiMonAn.id}`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    <i className="fa fa-coffee fa-2x text-primary" />
                                    <div className="ps-3">
                                        <h6 className="mt-n1 mb-0">{loaiMonAn.tenLoai}</h6>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content">
                        {apiData.map((loaiMonAn) => (
                            <div key={loaiMonAn.id} id={`tab-${loaiMonAn.id}`} className="tab-pane fade active show p-0">
                                <div className="row g-4">
                                    {loaiMonAn.monAn.map((monAn) => (
                                        <div key={monAn.monAnID} className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid rounded"
                                                    src={monAn.anhMonAn1URL || '/default-image.jpg'}
                                                    alt=""
                                                    style={{ width: 80 }}
                                                />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{monAn.tenMon}</span>
                                                        <span className="text-primary">{`${monAn.giaTien} VNĐ`}</span>
                                                    </h5>
                                                    <small className="fst-italic">{monAn.moTa}</small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
