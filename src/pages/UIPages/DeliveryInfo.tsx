import {FC} from "react";
import DeliveryInfoContent from "../../components/DeliveryInfoComponents/DeliveryInfoContent";
import Footer from "../../components/ReusableComponents/Footer";
import CustomNavbar from "../../components/ReusableComponents/Navbar";

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