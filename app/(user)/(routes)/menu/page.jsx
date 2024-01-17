import React from 'react'
import Breadcrumb from "../../../../components/layouts/Breadcrumb";
import Menu from "../../../../components/menu";

const MenuPage = () => {
    const breadcrumbItems = [
        {text: 'Trang Chủ', link: '/'},
        {text: 'Thực Đơn', link: '/menu'}
    ];
    return (
        <>
            <Breadcrumb items={breadcrumbItems} pageTitle="Thực Đơn"/>
            <Menu/>
        </>
    )
}

export default MenuPage