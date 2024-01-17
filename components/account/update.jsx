'use client'

import {Form, Input, Button, DatePicker} from "antd";
import DataRender from "../../APIs/getData";
import {enqueueSnackbar} from "notistack";

const UpdateUser = ({dataUser,onClose,reloadData}) => {
    const onFinish = async (values) => {
        // Submit the edited data to the server
        const res =  await DataRender.updataDataUser(values)
        reloadData();
        enqueueSnackbar('Cập nhật thông tin thành công !')
        onClose();
    };
    return(
        <>
            <Form
                name="editProfileForm"
                initialValues={{
                    name: dataUser[0].name,
                    dateOfBirth: moment(dataUser[0].dateOfBirth),
                    gender: dataUser[0].gender,
                    phone: dataUser[0].sdt,
                    address: dataUser[0].address,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Họ Tên"
                    name="name"
                    rules={[{ required: true, message: "Không được để trống họ tên!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Giới Tính"
                    name="gender"
                    rules={[{ required: true, message: "Không được để trống giới tính!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Ngày Sinh"
                    name="dateOfBirth"
                    rules={[
                        { required: true, message: "Không được để trống ngày sinh!" },
                    ]}
                >
                    <DatePicker placeholder="Chọn ngày sinh" style={{ width: "100%" }} format="DD/MM/YYYY" />
                </Form.Item>

                <Form.Item
                    label="Số Điện Thoại"
                    name="phone"
                    rules={[{ required: true, message: "Không được để trống SĐT!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Địa Chỉ"
                    name="address"
                    rules={[{ required: true, message: "Không được để trống địa chỉ!" }]}
                >
                    <Input />
                </Form.Item>

                {/* Add other form fields as needed */}

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Lưu Thay Đổi
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default UpdateUser