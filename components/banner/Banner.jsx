const Banner = () => {
    return (
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container my-5 py-5">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="display-3 text-white animated slideInLeft">
                            Cùng Thưởng Thức
                            <br />
                            Những Bữa Ăn Ngon
                        </h1>
                        <p className="text-white animated slideInLeft mb-4 pb-2">
                            Tinh tế trong từng đợt ẩm thực - Nhà hàng chúng tôi mang đến cho bạn trải nghiệm ẩm thực đẳng cấp, nơi hương vị tinh tế hòa quyện cùng không gian ấm cúng, tạo nên những kí ức độc đáo và ngon miệng
                        </p>
                        <a
                            href=""
                            className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                        >
                            Đặt Bàn Ngay
                        </a>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                        <img className="img-fluid" src="/images/hero.png" alt="heroimg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner