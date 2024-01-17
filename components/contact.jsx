import React from 'react'

const Contact = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                        Liên Hệ
                    </h5>
                    <h1 className="mb-5">Liên Hệ Cho Chúng Tôi</h1>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <iframe
                            className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3724.3990807573555!2d105.85528199999999!3d21.016712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAxJzAwLjIiTiAxMDXCsDUxJzE5LjAiRQ!5e0!3m2!1svi!2s!4v1702488581011!5m2!1svi!2s"
                            frameBorder={0}
                            style={{minHeight: 350, border: 0}}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex={0}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                            />
                                            <label htmlFor="name">Họ Tên</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Your Email"
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                placeholder="Subject"
                                            />
                                            <label htmlFor="subject">Tiêu Đề</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                  <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{height: 150}}
                      defaultValue={""}
                  />
                                            <label htmlFor="message">Nội Dung</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Gửi Ngay
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact