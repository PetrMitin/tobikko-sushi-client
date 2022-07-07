import {FC} from "react";
import DeliveryInfoContent from "../components/DeliveryInfoContent";
import Footer from "../components/Footer";
import CustomNavbar from "../components/Navbar";

const DeliveryInfo: FC = () => {
    return (
        <div id="delivery-info-container">
            <CustomNavbar whatIsActive={"delivery-info"} />
            <DeliveryInfoContent />
            <Footer />
        </div>
    )
}

export default DeliveryInfo