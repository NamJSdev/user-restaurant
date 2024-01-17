import Link from 'next/link';

const Breadcrumb = ({items,pageTitle}) => {
    return (
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
                <h1 className="display-3 text-white mb-3 animated slideInDown">{pageTitle}</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        {items.map((item, index) => (
                            <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`} aria-current={index === items.length - 1 ? 'page' : null}>
                                {item.link ? (
                                    <Link href={item.link}>
                                        {item.text}
                                    </Link>
                                ) : (
                                    <span>{item.text}</span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    )
};

export default Breadcrumb;
