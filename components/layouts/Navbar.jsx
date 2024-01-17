import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <Link href="/" className={`navbar-brand p-0 ${pathname === '/' ? 'active' : ''}`}>
                <h1 className="text-primary m-0">
                    <i className="fa fa-utensils me-3" />
                    TVH
                </h1>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0 pe-4">
                    <Link href="/" className={`nav-item nav-link ${pathname === '/' ? 'active' : ''}`}>
                        Trang Chủ
                    </Link>
                    <Link href="/about" className={`nav-item nav-link ${pathname.includes("/about") ? "active" : ""}`}>
                        Giới Thiệu
                    </Link>
                    <Link href="/menu" className={`nav-item nav-link ${pathname.includes("/menu") ? "active" : ""}`}>
                        Thực Đơn
                    </Link>
                    <Link href="/blog" className={`nav-item nav-link ${pathname.includes("/blog") ? "active" : ""}`}>
                        Bài Viết
                    </Link>
                    <Link href="/contact" className={`nav-item nav-link ${pathname.includes("/contact") ? "active" : ""}`}>
                        Liên Hệ
                    </Link>
                </div>
                <Link href="/booking" className="btn btn-primary py-2 px-4">
                    Đặt Bàn
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
