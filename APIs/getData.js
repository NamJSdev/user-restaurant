import axios, {toFormData} from 'axios';
import axiosClient from "./axiosClient";
import { format } from "date-fns";

class GetData {
    getData = async (url) => {
        return axiosClient.get(`/api${url}`);
    }
    filterTable = async (startTime, endTime) => {
        try {

            const response = await axiosClient.get(`/api/datBan/HienThiBanTrong?thoiGianBatDau=${startTime}&thoiGianKetThuc=${endTime}`);
            return response;

        } catch (error) {
            console.error("Error login:", error);
            throw error; // Bạn có thể xử lý lỗi ở đây theo cách phù hợp với ứng dụng của bạn
        }
    }
    orderTable = async (id,note,time) => {
        try {
            const formData = new FormData();

            formData.append('BanID', id);
            formData.append('GhiChu', note);
            formData.append('ThoiGianDuKienBatDau', time);
            const response = await axiosClient.post("/api/datBan/DatBan", formData);
            console.log(response)
            return response;

        } catch (error) {
            console.error("Error order tablea:", error);
            throw error; // Bạn có thể xử lý lỗi ở đây theo cách phù hợp với ứng dụng của bạn
        }
    }
    updataDataUser = async (values) => {
        try {
            const formData = new FormData();
            formData.append('Name', values.name);
            formData.append('Gender', values.gender);
            formData.append('DateOfBirth', format(new Date(values.dateOfBirth._i), "MM-dd-yyyy"));
            formData.append('SDT', values.phone);
            formData.append('address', values.address);
            const response = await axiosClient.put("/api/auth/ThayDoiThongTin", formData);
            console.log(response)
            return response;

        } catch (error) {
            console.error("Error put user data:", error);
            throw error; // Bạn có thể xử lý lỗi ở đây theo cách phù hợp với ứng dụng của bạn
        }
    }
    getTableDetail = async (id) => {
        try {
            return axiosClient.get(`/api/Ban/HienThiBan/${id}`);

        } catch (error) {
            console.error("Error get table detail:", error);
            throw error; // Bạn có thể xử lý lỗi ở đây theo cách phù hợp với ứng dụng của bạn
        }
    }
}

const DataRender = new GetData()
export default DataRender
