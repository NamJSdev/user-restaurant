import React from 'react'
import Breadcrumb from "../../../../components/layouts/Breadcrumb";
import Contact from "../../../../components/contact";


const ContactPage = () => {
    const breadcrumbItems = [
        {text: 'Trang Chủ', link: '/'},
        {text: 'Liên Hệ', link: '/contact'}
    ];
    return (
        <>
            <Breadcrumb items={breadcrumbItems} pageTitle="Liên Hệ"/>
            <Contact/>
        </>
    )
}

export default ContactPage