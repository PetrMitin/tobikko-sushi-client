import {FC} from "react";
import Footer from "../../components/ReusableComponents/Footer";
import CustomNavbar from "../../components/ReusableComponents/Navbar";

const AboutRestaurant: FC = () => {
    return (
        <div id="about-restaurant-container">
            <CustomNavbar whatIsActive={"about-restaurant"} />
            About Restaurant
            <Footer />
        </div>
    )
}

export default AboutRestaurant