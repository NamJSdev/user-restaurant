import React from 'react'
import Breadcrumb from "../../../../components/layouts/Breadcrumb";
import Blogs from "../../../../components/blogs";
const BlogPage = () => {
  const breadcrumbItems = [
    {text: 'Trang Chủ', link: '/'},
    {text: 'Bài Viết', link: '/blog'}
  ];
  return (
      <>
        <Breadcrumb items={breadcrumbItems} pageTitle="Danh sách bài viết"/>
        <Blogs/>
      </>
  )
}

export default BlogPage