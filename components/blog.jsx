import React from 'react'
import FacebookComment from './facebook/comment'
const Blog = () => {
    return (
        <div className="blog-single gray-bg">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-8 m-15px-tb">
                        <article className="article">
                            <div className="article-img">
                                <img
                                    src="https://www.bootdey.com/image/800x350/87CEFA/000000"
                                    title=""
                                    alt=""
                                />
                            </div>
                            <div className="article-title">
                                <h6>
                                    <a href="#">Lifestyle</a>
                                </h6>
                                <h2>They Now Bade Farewell To The Kind But Unseen People</h2>
                                <div className="media">
                                    <div className="avatar">
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                            title=""
                                            alt=""
                                        />
                                    </div>
                                    <div className="media-body">
                                        <label>Rachel Roth</label>
                                        <span>26 FEB 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="article-content">
                                <p>
                                    Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
                                    dolor pretium donec dictum. Vici consequat justo enim. Venenatis
                                    eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem
                                    libero tellus viverra venenatis aliquam. Commodo natoque quam
                                    pulvinar elit.
                                </p>
                                <p>
                                    Eget aenean tellus venenatis. Donec odio tempus. Felis arcu
                                    pretium metus nullam quam aenean sociis quis sem neque vici
                                    libero. Venenatis nullam fringilla pretium magnis aliquam nunc
                                    vulputate integer augue ultricies cras. Eget viverra feugiat cras
                                    ut. Sit natoque montes tempus ligula eget vitae pede rhoncus
                                    maecenas consectetuer commodo condimentum aenean.
                                </p>
                                <h4>What are my payment options?</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <blockquote>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam.
                                    </p>
                                    <p className="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Dick Grayson</cite>
                                    </p>
                                </blockquote>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </article>
                        <FacebookComment href="YOUR_FACEBOOK_POST_URL"/>

                    </div>
                    <div className="col-lg-4 m-15px-tb blog-aside">
                        {/* Latest Post */}
                        <div className="widget widget-latest-post">
                            <div className="widget-title">
                                <h3>Latest Post</h3>
                            </div>
                            <div className="widget-body">
                                <div className="latest-post-aside media">
                                    <div className="lpa-left media-body">
                                        <div className="lpa-title">
                                            <h5>
                                                <a href="#">
                                                    Prevent 75% of visitors from google analytics
                                                </a>
                                            </h5>
                                        </div>
                                        <div className="lpa-meta">
                                            <a className="name" href="#">
                                                Rachel Roth
                                            </a>
                                            <a className="date" href="#">
                                                26 FEB 2020
                                            </a>
                                        </div>
                                    </div>
                                    <div className="lpa-right">
                                        <a href="#">
                                            <img
                                                src="https://www.bootdey.com/image/400x200/FFB6C1/000000"
                                                title=""
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="latest-post-aside media">
                                    <div className="lpa-left media-body">
                                        <div className="lpa-title">
                                            <h5>
                                                <a href="#">
                                                    Prevent 75% of visitors from google analytics
                                                </a>
                                            </h5>
                                        </div>
                                        <div className="lpa-meta">
                                            <a className="name" href="#">
                                                Rachel Roth
                                            </a>
                                            <a className="date" href="#">
                                                26 FEB 2020
                                            </a>
                                        </div>
                                    </div>
                                    <div className="lpa-right">
                                        <a href="#">
                                            <img
                                                src="https://www.bootdey.com/image/400x200/FFB6C1/000000"
                                                title=""
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="latest-post-aside media">
                                    <div className="lpa-left media-body">
                                        <div className="lpa-title">
                                            <h5>
                                                <a href="#">
                                                    Prevent 75% of visitors from google analytics
                                                </a>
                                            </h5>
                                        </div>
                                        <div className="lpa-meta">
                                            <a className="name" href="#">
                                                Rachel Roth
                                            </a>
                                            <a className="date" href="#">
                                                26 FEB 2020
                                            </a>
                                        </div>
                                    </div>
                                    <div className="lpa-right">
                                        <a href="#">
                                            <img
                                                src="https://www.bootdey.com/image/400x200/FFB6C1/000000"
                                                title=""
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Latest Post */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog