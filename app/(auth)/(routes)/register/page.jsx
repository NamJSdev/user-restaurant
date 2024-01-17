'use client'

import React from 'react'
import {enqueueSnackbar } from 'notistack';
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useRouter} from "next/navigation";

import authApi from "../../../../APIs/auth";

const RegisterPage = () => {
    const router = useRouter();
    const [info, setInfo] = useState({
        userName: "",
        name: "",
        gender: "",
        email: "",
        passWord: "",
        sdt: "",
        address: "",
        bithday: "",
    });
    const handleRegister = async (e) => {

        e.preventDefault()

        const response = await authApi.register(info);

        if (response.code === 404) {
            enqueueSnackbar('Nhập thiếu thông tin đăng ký !')
            return;
        }
        if (response.code === 400) {
            enqueueSnackbar('Email của bạn không đúng định dạng!');
            return;
        }
        if (response.code === 200) {
            enqueueSnackbar(response.message);
            setInfo({
                userName: "",
                name: "",
                gender: "",
                email: "",
                passWord: "",
                sdt: "",
                address: "",
                bithday: "",
            });
            router.push("/verifyRegister");
        }
    };

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Đăng Ký Tài Khoản</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap p-0">
                            <form className="signin-form" onSubmit={handleRegister}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Họ Tên"
                                        value={info.name}
                                        onChange={(e) =>
                                            setInfo({...info, name: e.target.value})
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Ngày Sinh"
                                        value={info.bithday}
                                        onChange={(e) =>
                                            setInfo({...info, bithday: e.target.value})
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Giới Tính"
                                        value={info.gender}
                                        onChange={(e) =>
                                            setInfo({...info, gender: e.target.value})
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Địa Chỉ"
                                        value={info.address}
                                        onChange={(e) =>
                                            setInfo({...info, address: e.target.value})
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        value={info.email}
                                        onChange={(e) =>
                                            setInfo({...info, email: e.target.value})
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Số Điện Thoại"
                                        value={info.sdt}
                                        onChange={(e) =>
                                            setInfo({...info, sdt: e.target.value})
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tên Người Dùng"
                                        value={info.userName}
                                        onChange={(e) =>
                                            setInfo({...info, userName: e.target.value})
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        id="password-field"
                                        type="password"
                                        className="form-control"
                                        placeholder="Mật Khẩu"
                                        value={info.passWord}
                                        onChange={(e) =>
                                            setInfo({...info, passWord: e.target.value})
                                        }
                                        required
                                    />
                                    <span
                                        toggle="#password-field"
                                        className="fa fa-fw fa-eye field-icon toggle-password"
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="form-control btn btn-primary submit px-3"
                                    >
                                        Đăng Ký
                                    </button>
                                </div>
                            </form>
                            <p className="w-100 text-center">— Bạn đã có tài khoản ? —</p>
                            <div className="social d-flex text-center">
                                <a href="/login" className="px-2 py-2 mr-md-1 rounded">
                                    <span className="ion-logo-facebook mr-2"/> Đăng Nhập Ngay
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterPage