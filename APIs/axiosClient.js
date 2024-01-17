import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://localhost:44317',
});

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`
axiosClient.interceptors.request.use(async (config) => {
    config.headers = {
        'Content-type': 'application/json',
        ...config.headers,
    }
    config.data

    return config
})

axiosClient.interceptors.response.use((response) => {
        if (response.status === 200 && response.data) {
            return response.data;
        }
        return response
    },
    error => {
        console.warn(`Lỗi kết nối đến cơ sở dữ liệu, ${error.message}`)
    }
)

export default axiosClient;