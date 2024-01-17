const AboutUs = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-start">
                                <img
                                    className="img-fluid rounded w-100 wow zoomIn"
                                    data-wow-delay="0.1s"
                                    src="images/about-1.jpg"
                                />
                            </div>
                            <div className="col-6 text-start">
                                <img
                                    className="img-fluid rounded w-75 wow zoomIn"
                                    data-wow-delay="0.3s"
                                    src="images/about-2.jpg"
                                    style={{ marginTop: "25%" }}
                                />
                            </div>
                            <div className="col-6 text-end">
                                <img
                                    className="img-fluid rounded w-75 wow zoomIn"
                                    data-wow-delay="0.5s"
                                    src="images/about-3.jpg"
                                />
                            </div>
                            <div className="col-6 text-end">
                                <img
                                    className="img-fluid rounded w-100 wow zoomIn"
                                    data-wow-delay="0.7s"
                                    src="images/about-4.jpg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                            Giới Thiệu Về Chúng Tôi
                        </h5>
                        <h1 className="mb-4">
                            Chào Mừng Đến Với <i className="fa fa-utensils text-primary me-2" />
                            The Valley House - Lê Ngọc Hân
                        </h1>
                        <p className="mb-4">
                        Tại The Valley House, chất lượng và hương vị món ăn luôn được đặt lên hàng đầu. Bạn có thể thưởng thức các món: Pate gan ngỗng đặc biệt, Steak, Mỳ Ý đặc biệt The Valley House, Sò điệp Nhật áp chảo, Thịt nguội tổng hợp, Cá hồi Nauy nướng, Cá hồi xông khói,... với hương vị chuẩn Âu, do các đầu bếp chuyên nghiệp với 20 năm kinh nghiệm trực tiếp chế biến. Và, cũng đừng quên nhâm nhi một vài ly vang hảo hạng để bữa ăn càng thêm hoàn hảo và tuyệt vời hơn.
                        </p>
                        <p className="mb-4">
                        Với mức giá khoảng 200.000 đến 350.000 vnđ/người, nhà hàng The Valley House là địa chỉ phù hợp với những buổi tiếp khách, những cuộc gặp gỡ bạn bè, sum họp gia đình hay liên hoan nhóm...
                        </p>
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1
                                        className="flex-shrink-0 display-5 text-primary mb-0"
                                        data-toggle="counter-up"
                                    >
                                        5
                                    </h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Năm</p>
                                        <h6 className="text-uppercase mb-0">Hoạt Động</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1
                                        className="flex-shrink-0 display-5 text-primary mb-0"
                                        data-toggle="counter-up"
                                    >
                                        15
                                    </h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Nổi Tiếng</p>
                                        <h6 className="text-uppercase mb-0">Đầu Bếp</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs