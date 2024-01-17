import Breadcrumb from "../../../../../components/layouts/Breadcrumb";
import Blog from "../../../../../components/blog";

const BlogDetail = () => {
    const breadcrumbItems = [
        {text: 'Trang Chủ', link: '/'},
        {text: 'Bài Viết', link: '/blog'},
        {text: 'Chi Tiết Bài Viết', link: '/'}
      ];
    return (
        <>
            <Breadcrumb items={breadcrumbItems} pageTitle="Nếu em đi iii" />
            <Blog/>
        </>

    )
}

export default BlogDetail