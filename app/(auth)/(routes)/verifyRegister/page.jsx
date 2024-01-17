'use client'

import React, {useState} from "react";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import authApi from "../../../../APIs/auth";
import {enqueueSnackbar} from "notistack";
const VerifyRegister = () => {
    const router = useRouter();

    const [codeActive,setCode] = useState("")
    const defaultObjValidInput = {
        isValidValueCode: true,
    };
    const [objValidInput, setObjValidInput] =
        useState(defaultObjValidInput);
    const handleVerifyRegister = async (e) => {
        e.preventDefault(); // Ngăn chặn sự kiện mặc định của form
        setObjValidInput(defaultObjValidInput);
        if (!codeActive) {
            setObjValidInput({
                ...defaultObjValidInput,
                isValidValueCode: false,
            });
            enqueueSnackbar("Nhập mã xác thực!");
            return;
        }
        const response = await authApi.verifyRegister(codeActive);

        if (response.code === 404) {
            enqueueSnackbar('Mã xác minh chưa chính xác hoặc hết hạn !')
            return;
        }
        if (response.code === 200) {
            enqueueSnackbar('Đăng ký tài khoản thành công. Đăng nhập để đặt bàn ngay!')
            router.push("/login");
        }
    }
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Xác Nhận Đăng Ký</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap p-0">
                            <form className="signin-form" onSubmit={handleVerifyRegister}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={
                                            objValidInput.isValidValueCode
                                                ? "form-control"
                                                : "is-invalid form-control"
                                        }
                                        placeholder="Nhập mã xác thực"
                                        value={codeActive}
                                        onChange={(e) => setCode(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="form-control btn btn-primary submit px-3"
                                    >
                                        Xác Nhận
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VerifyRegister