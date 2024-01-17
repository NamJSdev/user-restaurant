import Service from '../../components/services'
import AboutUs from '../../components/aboutUs'
import ChefList from '../../components/chefList'
import Testimonial from '../../components/testimonial'
import Banner from '../../components/banner/Banner'
import Avatar from "../../components/account/avatar";

const PublicPage = () => {


    return (
        <>
            <Banner/>
            <Service/>
            <AboutUs/>
            <ChefList/>
            <Testimonial/>
        </>
    )
}

export default PublicPage;