import axiosClient from "./axiosClient";

class AuthAPIs {
    login = async (valueLogin, password) => {
        console.log(valueLogin, password)
        try {
            const formData = new FormData();

            formData.append('UserName', valueLogin);
            formData.append('Password', password);
            const response = await axiosClient.post("/api/auth/login", formData);
            console.log(response)
            return response;

        } catch (error) {
            console.error("Error login:", error);
            throw error; // Bạn có thể xử lý lỗi ở đây theo cách phù hợp với ứng dụng của bạn
        }
    }
    register = async (data) => {
        console.log(data)
        try {
            const formData = new FormData();

            formData.append('UserName', data.userName);
            formData.append('Name', data.Name);
            formData.append('Gender', data.gender);
            formData.append('Email', data.email);
            formData.append('Password', data.passWord);
            formData.append('SDT', data.sdt);
            formData.append('address', data.address);
            formData.append('DateOfBirth', data.bithday);
            const response = await axiosClient.post("/api/auth/register", formData);
            console.log(response)
            return response;
        } catch (error) {
            console.error("Error register:", error);
            throw error; // Bạn có thể xử lý lỗi ở đây theo cách phù hợp với ứng dụng của bạn
        }
    }
    verifyMail = async (email) => {
        console.log(email)
        try {
            const formData = new FormData();

            formData.append('Email', email);
            const response = await axiosClient.post("/api/auth/forgot-password", formData);
            return response;

        } catch (error) {
            console.error("Error login:", error);
            throw error; // Bạn có thể xử lý lỗi ở đây theo cách phù hợp với ứng dụng của bạn
        }
    }
    verifyRegister = async (codeActive) => {
        console.log(codeActive)
        try {
            const formData = new FormData();

            formData.append('MaXacNhan', codeActive);
            const response = await axiosClient.put("/api/auth/XacNhanDangKyTaiKhoan", formData);
            console.log(response)
            return response;

        } catch (error) {
            console.error("Error verify register:", error);
            throw error; // Bạn có thể xử lý lỗi ở đây theo cách phù hợp với ứng dụng của bạn
        }
    }
    changePass = async (codeActive, password) => {
        console.log(codeActive, password)
        try {
            const formData = new FormData();

            formData.append('CodeActive', codeActive);
            formData.append('NewPassword', password);
            const response = await axiosClient.post("/api/auth/create-new-password", formData);
            return response;

        } catch (error) {
            console.error("Error login:", error);
            throw error; // Bạn có thể xử lý lỗi ở đây theo cách phù hợp với ứng dụng của bạn
        }
    }
}

const authApi = new AuthAPIs();
export default authApi;