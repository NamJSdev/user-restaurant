'use client'
import React from 'react'
import AboutUs from "../../../../components/aboutUs";
import ChefList from "../../../../components/chefList";
import Breadcrumb from "../../../../components/layouts/Breadcrumb";
import AvatarUser from "../../../../components/account/avatar";

const page = () => {

    const breadcrumbItems = [
        {text: 'Trang Chủ', link: '/'},
        {text: 'Giới Thiệu', link: '/about'}
    ];
    return (
        <>
            <Breadcrumb items={breadcrumbItems} pageTitle="Giới Thiệu"/>
            <AboutUs/>
            <ChefList/>
        </>
    )
}

export default page