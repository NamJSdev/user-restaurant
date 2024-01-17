'use client'

import React, {useState} from "react";
import authApi from "../../../../APIs/auth";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {enqueueSnackbar} from "notistack";

const LoginPage = () => {
    const router = useRouter();
    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");
    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassword: true,
    };
    const [objValidInput, setObjValidInput] =
        useState(defaultObjValidInput);

    const handleLogin = async (e) => {
        e.preventDefault(); // Ngăn chặn sự kiện mặc định của form
        setObjValidInput(defaultObjValidInput);

        if (!valueLogin) {
            setObjValidInput({
                ...defaultObjValidInput,
                isValidValueLogin: false,
            });
            enqueueSnackbar("Nhập tên đăng nhập của bạn !");
            return;
        }

        if (!password) {
            setObjValidInput({
                ...defaultObjValidInput,
                isValidPassword: false,
            });
            enqueueSnackbar("Nhập mật khẩu của bạn !");
            return;
        }

        const response = await authApi.login(valueLogin, password);
        // Xử lý dữ liệu đăng nhập ở đây
        if (response.code === 404) {
            enqueueSnackbar('Tài khoản không tồn tại !')
            return;
        }
        if (response.code === 400) {
            enqueueSnackbar('Mật khẩu không chính xác !')
            return;
        }
        if (response.code === 200) {
            enqueueSnackbar(response.message)
            let token = response.data.accessToken;
            localStorage.setItem("jwt", token);
            router.push("/booking");
        }
    };

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Đăng Nhập</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap p-0">
                            <form className="signin-form" onSubmit={handleLogin}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={
                                            objValidInput.isValidValueLogin
                                                ? "form-control"
                                                : "is-invalid form-control"
                                        }
                                        placeholder="Tên đăng nhập"
                                        value={valueLogin}
                                        onChange={(e) => setValueLogin(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        id="password-field"
                                        type="password"
                                        className={
                                            objValidInput.isValidPassword
                                                ? "form-control"
                                                : "is-invalid form-control"
                                        }
                                        placeholder="Mật Khẩu"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
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
                                        Đăng Nhập
                                    </button>
                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="w-50">
                                        <label className="checkbox-wrap checkbox-primary">
                                            Nhớ tài khoản
                                            <input type="checkbox" defaultChecked/>
                                            <span className="checkmark"/>
                                        </label>
                                    </div>
                                    <div className="w-50 text-md-right">
                                        <Link href="/verifyMail" style={{color: "#fff"}}> Quên Mật Khẩu </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
