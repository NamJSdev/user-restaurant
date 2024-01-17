import React from 'react'

const Service = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-user-tie text-primary mb-4" />
                                <h5>Đầu bếp chuyên nghiệp</h5>
                                <p>
                                    Nhà hàng với đội ngũ đầu bếp hàng đầu, được đánh giá 5 sao
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-utensils text-primary mb-4" />
                                <h5>Thực phẩm cao cấp</h5>
                                <p>
                                    Thực phẩm của nhà hàng được tuyển chọn chặt chẽ
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-cart-plus text-primary mb-4" />
                                <h5>Booking Online</h5>
                                <p>
                                    Khách hàng có thể đặt bàn Online tiện lợi
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-headset text-primary mb-4" />
                                <h5> Hỗ trợ 24/7</h5>
                                <p>
                                    Hỗ trợ khách hàng thân yêu 24/7 đảm bảo KH hài lòng
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Service