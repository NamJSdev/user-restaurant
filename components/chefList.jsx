"use client";
import DataRender from "../APIs/getData";
import React, { useState, useEffect } from 'react';

const ChefList = () => {
    const [apiData, setApiData] = useState([]);

    const getAllChefs = async () => {
        const api = "/DauBep/HienThiDanhSachDauBep";
        try {
            const res = await DataRender.getData(api);
            if (res) {
                const apiData = res.data;
                setApiData(apiData.slice(0, 4)); // Set the first 4 chefs in the state
                console.log(apiData);
            } else {
                console.log(`Chef list not found`);
            }
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu từ API:", error);
        }
    };
    
    useEffect(() => {
        getAllChefs();
    }, []);

    return (
        <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                        Đầu Bếp
                    </h5>
                    <h1 className="mb-5">Đội Ngũ Hàng Đầu</h1>
                </div>
                <div className="row g-4">
                    {apiData.map((chef) => (
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={chef.id}>
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src={`${chef.anhDauBepURl}`} alt="" />
                                </div>
                                <h5 className="mb-0">{chef.hoTen}</h5>
                                <small>{chef.moTa}</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <a className="btn btn-square btn-primary mx-1" href="">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChefList;
